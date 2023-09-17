import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventHeaderComponent } from './components/event-header/event-header.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';

@Component({
  standalone: true,
  imports: [CommonModule, EventHeaderComponent, EventEditComponent],
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EventComponent {}
