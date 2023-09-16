import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective, RouterLink],
  templateUrl: './event-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventHeaderComponent {}
