import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input[type=datetime-local][formControlName]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDatetimeLocalDirective),
      multi: true,
    },
  ],
  standalone: true,
})
export class InputDatetimeLocalDirective implements ControlValueAccessor {
  @HostListener('blur', []) onTouched = () => {};
  @HostListener('input', ['$event.target.value']) onChange = (_: string) => {};

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  registerOnChange(fn: (value: Date) => void) {
    this.onChange = (value: string) => {
      fn(new Date(value));
    };
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(inputDate: Date = new Date()) {
    const inputValue: string = formatDate(inputDate, 'YYYY-MM-ddTHH:mm:ss', 'en');

    this.renderer.setAttribute(this.elementRef.nativeElement, 'value', inputValue);
  }
}
