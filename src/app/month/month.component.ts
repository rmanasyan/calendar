import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthHeaderComponent } from './components/month-header/month-header.component';
import { MonthGridComponent } from './components/month-grid/month-grid.component';

@Component({
  standalone: true,
  imports: [CommonModule, MonthHeaderComponent, MonthGridComponent],
  templateUrl: './month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MonthComponent {}
