import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormComponent {}
