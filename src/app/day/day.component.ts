import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayHeaderComponent } from './components/day-header/day-header.component';
import { DayEventsComponent } from './components/day-events/day-events.component';

@Component({
  standalone: true,
  imports: [CommonModule, DayHeaderComponent, DayEventsComponent],
  templateUrl: './day.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DayComponent {}
