import { inject, Injectable } from '@angular/core';
import { filter, map, shareReplay } from 'rxjs';
import { RouterEventsService } from '../../shared/services/router-events.service';
import { getMonthDays, isValidMonthString } from '../helpers/month.helper';

@Injectable({
  providedIn: 'root',
})
export class MonthService {
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
  );
}
