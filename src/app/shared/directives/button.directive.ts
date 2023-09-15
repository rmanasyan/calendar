import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge, ClassNameValue } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'border border-zinc-300 hover:bg-zinc-200',
        primary: 'bg-zinc-800 text-zinc-50 hover:bg-zinc-600',
      },
      size: {
        default: 'py-1 px-3',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  private _variant: ButtonVariants['variant'] = 'default';
  @Input()
  set variant(value: ButtonVariants['variant']) {
    this._variant = value;
    this._class = this.generateClasses();
  }

  private _size: ButtonVariants['size'] = 'default';
  @Input()
  set size(value: ButtonVariants['size']) {
    this._size = value;
    this._class = this.generateClasses();
  }

  private _inputs: ClassNameValue = '';
  @Input()
  set class(inputs: ClassNameValue) {
    this._inputs = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class')
  private _class = this.generateClasses();

  private generateClasses() {
    return twMerge(buttonVariants({ variant: this._variant, size: this._size }), this._inputs);
  }
}
