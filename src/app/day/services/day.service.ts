import { inject, Injectable } from '@angular/core';
import { filter, map, shareReplay } from 'rxjs';
import { RouterEventsService } from '../../shared/services/router-events.service';
import { isValidDayString } from '../helpers/day.helper';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  currentDay$ = inject(RouterEventsService)
    .selectParams('day')
    .pipe(
      filter((param) => !!param && isValidDayString(param)),
      map((param) => new Date(param)),
      shareReplay({ refCount: true }),
    );
}
