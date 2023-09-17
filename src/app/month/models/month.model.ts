import { CalendarEvent } from '../../event/models/event.model';

export interface MonthDay {
  day: number;
  date: Date;
  isCurrentMonth: boolean;
  isCurrentDate?: boolean;
  events?: CalendarEvent[];
}
