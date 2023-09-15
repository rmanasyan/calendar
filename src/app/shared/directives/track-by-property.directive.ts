import { Directive, Host, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Directive({
  selector: '[ngForTrackByProperty]',
  standalone: true,
})
export class TrackByPropertyDirective {
  @Input('ngForTrackByProperty') propertyName: string = '';

  public constructor(@Host() private readonly ngFor: NgForOf<any>) {
    this.ngFor.ngForTrackBy = (index: number, item: any) => {
      return item[this.propertyName] || item;
    };
  }
}
