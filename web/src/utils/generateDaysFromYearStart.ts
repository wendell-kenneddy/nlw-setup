import dayjs from 'dayjs';

export function generateDaysFromYearStart() {
  const dates = [];
  const firstDayOfTheYear = dayjs().startOf('year');
  const today = new Date();

  let compareDate = firstDayOfTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate);
    compareDate = compareDate.add(1, 'day');
  }

  return dates;
}
