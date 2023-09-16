import { inject, Injectable } from '@angular/core';
import { orderBy, where } from '@angular/fire/firestore';
import { filter, map, Observable, shareReplay, switchMap } from 'rxjs';
import { RouterEventsService } from '../../shared/services/router-events.service';
import { getCurrentDayStart, getNextDayStart, isValidDayString } from '../helpers/day.helper';
import { FirestoreService } from '../../shared/services/firestore.service';
import { CalendarEventFirestore, CalendarEvent, fromFirestoreDataArray } from '../../event/models/event.model';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  routerEventsService = inject(RouterEventsService);
  firestoreService = inject(FirestoreService);

  currentDay$ = this.routerEventsService.selectParams('day').pipe(
    filter((param) => !!param && isValidDayString(param)),
    map((param) => new Date(param)),
    shareReplay({ refCount: true }),
  );

  dayEvents$ = this.currentDay$.pipe(
    switchMap((date) => this.selectDayEvents(date)),
    shareReplay({ refCount: true }),
  );

  private selectDayEvents(day: Date): Observable<CalendarEvent[]> {
    return this.firestoreService
      .selectCollectionData<CalendarEventFirestore>(
        'events',
        where('startDate', '>=', getCurrentDayStart(day)),
        where('startDate', '<', getNextDayStart(day)),
        orderBy('startDate', 'asc'),
      )
      .pipe(map(fromFirestoreDataArray));
  }
}
