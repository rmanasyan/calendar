import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayEventsComponent } from '../day/components/day-events/day-events.component';
import { DayHeaderComponent } from '../day/components/day-header/day-header.component';
import { EventHeaderComponent } from './components/event-header/event-header.component';
import { EventFormComponent } from './components/event-form/event-form.component';

@Component({
  standalone: true,
  imports: [CommonModule, DayEventsComponent, DayHeaderComponent, EventHeaderComponent, EventFormComponent],
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EventComponent {}
