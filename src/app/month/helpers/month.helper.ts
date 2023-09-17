import { MonthDay } from '../models/month.model';

export function getWeekDayNames(): ReadonlyArray<string> {
  return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}

export function isValidMonthString(value: string = '') {
  // eg: '2023-09'
  const isValidString = !!value.match(/^(\d{4}-\d{2})$/);

  // eg: '2023-99'
  const isValidDate = !isNaN(new Date(value).getTime());

  return isValidString && isValidDate;
}

export function getMonthDays(year: number, month: number) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthDays = new Date(year, month, 0).getDate();
  const nextMonth = month === 11 ? 0 : month + 1;

  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
  const endDay = lastDay.getDay() === 0 ? 0 : 7 - lastDay.getDay();

  const monthDays: MonthDay[] = [];

  for (let i = startDay; i > 0; i--) {
    const day = prevMonthDays - i + 1;
    const date = new Date(prevMonth === 11 ? year - 1 : year, prevMonth, day);

    monthDays.push({
      day: day,
      date: date,
      isCurrentMonth: false,
    });
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);

    monthDays.push({
      day: i,
      date: date,
      isCurrentMonth: true,
      isCurrentDate: date.getTime() === today.getTime(),
    });
  }

  // make grid fixed size 7 day x 6 weeks (rows)
  const restDays = 42 - monthDays.length;

  for (let i = 1; i <= restDays; i++) {
    monthDays.push({
      day: i,
      date: new Date(nextMonth === 0 ? year + 1 : year, nextMonth, i),
      isCurrentMonth: false,
    });
  }

  return monthDays;
}
