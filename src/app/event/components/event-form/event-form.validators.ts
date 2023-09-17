import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { formatDate } from '@angular/common';

export const endDateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const startDate: AbstractControl<Date> | null = control.get('startDate');
  const endDate: AbstractControl<Date> | null = control.get('endDate');

  const startTime = startDate?.value.getTime() || 0;
  const endTime = endDate?.value.getTime() || 0;

  return startTime > endTime ? { endDateError: true } : null;
};

export const multiDayValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const startDate: AbstractControl<Date> | null = control.get('startDate');
  const endDate: AbstractControl<Date> | null = control.get('endDate');

  const startDay = formatDate(startDate?.value || 0, 'YYYY-MM-dd', 'en');
  const endDay = formatDate(endDate?.value || 0, 'YYYY-MM-dd', 'en');

  return startDay !== endDay ? { multiDayError: true } : null;
};
