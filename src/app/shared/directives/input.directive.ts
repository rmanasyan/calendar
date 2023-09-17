import { Directive, HostBinding, Input } from '@angular/core';
import { twMerge, ClassNameValue } from 'tailwind-merge';

const defaultClasses =
  'flex h-10 w-full rounded-md border border-zinc-400 bg-zinc-50 px-3 py-2 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

@Directive({
  selector: '[appInput]',
  standalone: true,
})
export class InputDirective {
  private _inputs: ClassNameValue = '';
  @Input()
  set class(inputs: ClassNameValue) {
    this._inputs = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class')
  private _class = this.generateClasses();

  private generateClasses() {
    return twMerge(defaultClasses, this._inputs);
  }
}
