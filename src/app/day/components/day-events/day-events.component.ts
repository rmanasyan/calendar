import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DayService } from '../../services/day.service';
import { TrackByPropertyDirective } from '../../../shared/directives/track-by-property.directive';

@Component({
  selector: 'app-day-events',
  standalone: true,
  imports: [CommonModule, RouterLink, TrackByPropertyDirective],
  templateUrl: './day-events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayEventsComponent {
  dayEvents$ = inject(DayService).dayEvents$;
}
