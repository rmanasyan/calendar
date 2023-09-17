import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective, RouterLink],
  templateUrl: './event-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventHeaderComponent {
  event$ = inject(EventService).event$;
}
