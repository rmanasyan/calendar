import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TrackByPropertyDirective } from '../../../shared/directives/track-by-property.directive';
import { getWeekDayNames } from '../../helpers/month.helper';
import { MonthService } from '../../services/month.service';

@Component({
  selector: 'app-month-grid',
  standalone: true,
  imports: [CommonModule, RouterLink, TrackByPropertyDirective],
  templateUrl: './month-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthGridComponent {
  weekDays = getWeekDayNames();
  monthDays$ = inject(MonthService).monthDays$;
}
