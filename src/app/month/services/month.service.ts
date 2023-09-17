import { inject, Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { orderBy, where } from '@angular/fire/firestore';
import { combineLatest, filter, map, Observable, shareReplay, startWith, switchMap } from 'rxjs';
import { RouterEventsService } from '../../shared/services/router-events.service';
import { getMonthDays, isValidMonthString } from '../helpers/month.helper';
import { CalendarEvent, CalendarEventFirestore, fromFirestoreDataArray } from '../../event/models/event.model';
import { getCurrentDayStart, getNextDayStart } from '../../day/helpers/day.helper';
import { FirestoreService } from '../../shared/services/firestore.service';
import { MonthDay } from '../models/month.model';

@Injectable({
  providedIn: 'root',
})
export class MonthService {
  firestoreService = inject(FirestoreService);

  currentMonth$ = inject(RouterEventsService)
    .selectParams('month')
    .pipe(
      filter((param) => !!param && isValidMonthString(param)),
      map((param) => new Date(param + '-01')),
      shareReplay({ refCount: true }),
    );

  monthDays$ = this.currentMonth$.pipe(
    map((date) => {
      const year = date.getFullYear();
      const month = date.getMonth();

      return getMonthDays(year, month);
    }),
    shareReplay({ refCount: true }),
  );

  monthEvents$: Observable<CalendarEvent[]> = this.monthDays$.pipe(
    switchMap((days) => {
      const start = days[0];
      const end = days[days.length - 1];

      return this.selectMonthEvents(start.date, end.date);
    }),
    shareReplay({ refCount: true }),
  );

  monthDaysWithEvents$: Observable<MonthDay[]> = combineLatest([
    this.monthDays$,
    this.monthEvents$.pipe(startWith([])),
  ]).pipe(
    map(([days, events]) => {
      return days.map((day) => {
        const dayWithEvents = {
          ...day,
          events: events.filter((event) => {
            const eventDay = formatDate(event.startDate, 'YYYY-MM-dd', 'en');
            const monthDay = formatDate(day.date, 'YYYY-MM-dd', 'en');

            return eventDay == monthDay;
          }),
        } as MonthDay;

        return dayWithEvents;
      });
    }),
  );

  private selectMonthEvents(start: Date, end: Date): Observable<CalendarEvent[]> {
    return this.firestoreService
      .selectCollectionData<CalendarEventFirestore>(
        'events',
        where('startDate', '>=', getCurrentDayStart(start)),
        where('startDate', '<', getNextDayStart(end)),
        orderBy('startDate', 'asc'),
      )
      .pipe(map(fromFirestoreDataArray));
  }
}
