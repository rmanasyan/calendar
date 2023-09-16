import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '../../../shared/directives/button.directive';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonDirective],
  templateUrl: './event-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormComponent {}
