import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DayService } from '../../services/day.service';
import { ButtonDirective } from '../../../shared/directives/button.directive';

@Component({
  selector: 'app-day-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective, RouterLink],
  templateUrl: './day-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayHeaderComponent {
  currentDay$ = inject(DayService).currentDay$;
}
