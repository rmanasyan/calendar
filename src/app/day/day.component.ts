import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthGridComponent } from '../month/components/month-grid/month-grid.component';
import { MonthHeaderComponent } from '../month/components/month-header/month-header.component';
import { DayHeaderComponent } from './components/day-header/day-header.component';
import { DayEventsComponent } from './components/day-events/day-events.component';

@Component({
  standalone: true,
  imports: [CommonModule, MonthGridComponent, MonthHeaderComponent, DayHeaderComponent, DayEventsComponent],
  templateUrl: './day.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DayComponent {}
