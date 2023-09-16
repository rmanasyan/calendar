import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [CommonModule, EventFormComponent],
  templateUrl: './event-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventEditComponent {}
