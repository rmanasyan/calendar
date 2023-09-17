import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventFormComponent } from '../event-form/event-form.component';
import { EventService } from '../../services/event.service';
import { TrackByPropertyDirective } from '../../../shared/directives/track-by-property.directive';
import { CalendarEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [CommonModule, EventFormComponent, TrackByPropertyDirective],
  templateUrl: './event-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventEditComponent {
  eventService = inject(EventService);
  router = inject(Router);

  event$ = this.eventService.event$;

  addEvent(data: Partial<CalendarEvent>) {
    this.eventService.addEvent(data).then(() => {
      this.redirect();
    });
  }

  updateEvent(data: Partial<CalendarEvent>) {
    const { id, ...update } = { ...data };

    if (id) {
      this.eventService.updateEvent(id, update).then(() => {
        this.redirect();
      });
    }
  }

  deleteEvent(id: CalendarEvent['id']) {
    this.eventService.deleteEvent(id).then(() => {
      this.redirect();
    });
  }

  private redirect() {
    this.router.navigate(['/']);
  }
}
