import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MonthService } from '../../services/month.service';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { tap } from 'rxjs';

@Component({
  selector: 'app-month-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonDirective],
  templateUrl: './month-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthHeaderComponent {
  today = new Date();
  prevMonth?: Date;
  nextMonth?: Date;

  currentMonth$ = inject(MonthService).currentMonth$.pipe(
    tap((date) => {
      const year = date.getFullYear();
      const month = date.getMonth();

      this.prevMonth = new Date(year, month - 1);
      this.nextMonth = new Date(year, month + 1);
    }),
  );
}
