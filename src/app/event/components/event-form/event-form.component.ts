import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { CalendarEvent } from '../../models/event.model';
import { InputDirective } from '../../../shared/directives/input.directive';
import { InputDatetimeLocalDirective } from '../../../shared/directives/input-datetime-local.directive';
import { endDateValidator, multiDayValidator } from './event-form.validators';

interface EventForm {
  title: FormControl<string>;
  location: FormControl<string>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
  notes: FormControl<string>;
}

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonDirective,
    ReactiveFormsModule,
    InputDirective,
    InputDatetimeLocalDirective,
  ],
  templateUrl: './event-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormComponent implements OnInit {
  @Input() data?: CalendarEvent;
  @Output() save = new EventEmitter<Partial<CalendarEvent>>();
  @Output() delete = new EventEmitter<CalendarEvent['id']>();

  formGroup = new FormGroup<EventForm>(
    {
      title: new FormControl('', { validators: Validators.required, nonNullable: true }),
      location: new FormControl('', { nonNullable: true }),
      startDate: new FormControl(new Date(), { validators: Validators.required, nonNullable: true }),
      endDate: new FormControl(new Date(), { validators: Validators.required, nonNullable: true }),
      notes: new FormControl('', { nonNullable: true }),
    },
    { validators: [endDateValidator, multiDayValidator] },
  );

  ngOnInit() {
    if (this.data) {
      this.formGroup.patchValue(this.data);
    }
  }

  saveEvent() {
    let saveData = this.formGroup.value as Partial<CalendarEvent>;

    if (this.data?.id) {
      saveData.id = this.data?.id;
    }

    // prevent double submit
    this.formGroup.markAsPristine();
    this.save.emit(saveData);
  }

  deleteEvent() {
    if (this.data?.id) {
      this.delete.emit(this.data.id);
    }
  }
}
