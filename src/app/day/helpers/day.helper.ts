export function isValidDayString(value: string = '') {
  // eg: '2023-09-29'
  const isValidString = !!value.match(/^(\d{4}-\d{2}-\d{2})$/);

  // eg: '2023-09-99'
  const isValidDate = !isNaN(new Date(value).getTime());

  return isValidString && isValidDate;
}
