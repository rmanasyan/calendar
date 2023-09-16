import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-day-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './day-events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayEventsComponent {
  events = [...Array(10).keys()];
}
