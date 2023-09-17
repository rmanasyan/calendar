import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent } from '../../../event/models/event.model';

@Component({
  selector: 'app-month-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthEventsComponent {
  @Input() events?: CalendarEvent[];
}
