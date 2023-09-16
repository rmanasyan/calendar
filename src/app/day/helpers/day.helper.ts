export function isValidDayString(value: string = '') {
  // eg: '2023-09-29'
  const isValidString = !!value.match(/^(\d{4}-\d{2}-\d{2})$/);

  // eg: '2023-09-99'
  const isValidDate = !isNaN(new Date(value).getTime());

  return isValidString && isValidDate;
}

export function getCurrentDayStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getNextDayStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}
