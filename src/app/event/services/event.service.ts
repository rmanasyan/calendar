import { inject, Injectable } from '@angular/core';
import { filter, map, Observable, shareReplay, switchMap } from 'rxjs';
import { FirestoreService } from '../../shared/services/firestore.service';
import { CalendarEvent, CalendarEventFirestore, fromFirestoreData } from '../models/event.model';
import { RouterEventsService } from '../../shared/services/router-events.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  firestoreService = inject(FirestoreService);
  routerEventsService = inject(RouterEventsService);

  event$: Observable<CalendarEvent> = this.routerEventsService.selectParams('id').pipe(
    switchMap((id) => this.selectEvent(id)),
    shareReplay({ refCount: true }),
  );

  private selectEvent(id: string): Observable<CalendarEvent> {
    return this.firestoreService.selectDoc<CalendarEventFirestore>(`events/${id}`).pipe(
      filter((data) => !!data),
      map(fromFirestoreData),
    );
  }
}
