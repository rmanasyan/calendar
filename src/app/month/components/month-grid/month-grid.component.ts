import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TrackByPropertyDirective } from '../../../shared/directives/track-by-property.directive';
import { getWeekDayNames } from '../../helpers/month.helper';
import { MonthService } from '../../services/month.service';
import { MonthEventsComponent } from '../month-events/month-events.component';

@Component({
  selector: 'app-month-grid',
  standalone: true,
  imports: [CommonModule, RouterLink, TrackByPropertyDirective, MonthEventsComponent],
  templateUrl: './month-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthGridComponent {
  monthService = inject(MonthService);

  weekDays = getWeekDayNames();
  monthDays$ = this.monthService.monthDaysWithEvents$;
}
