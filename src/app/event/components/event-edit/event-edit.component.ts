import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormComponent } from '../event-form/event-form.component';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [CommonModule, EventFormComponent],
  templateUrl: './event-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventEditComponent {
  event$ = inject(EventService).event$;
}
