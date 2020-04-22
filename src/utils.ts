// Explicitly returning any from omitProps negates a weird type bug in styled-components. At least I think it is a bug

import { MonthConfig } from './Month';
import {
  startOfWeek,
  addWeeks,
  isSameMonth,
  endOfWeek,
  isSameDay,
  eachDayOfInterval,
  startOfMonth,
} from 'date-fns';
import { WeekConfig } from './Week';

export const omitProps = (...props: Array<string | number>): any => ({
  shouldForwardProp: (prop: string | number) => !props.includes(prop),
});

export const getMonthConfig = (monthDate: Date) => {
  const today = new Date();
  let weekStartDate = startOfWeek(startOfMonth(monthDate));
  const month: MonthConfig = [];
  do {
    console.log(weekStartDate);
    const weekConfig: WeekConfig = eachDayOfInterval({
      start: weekStartDate,
      end: endOfWeek(weekStartDate),
    }).map((date) => ({
      date,
      current: isSameDay(today, date),
      outOfContext: !isSameMonth(monthDate, date),
    }));
    month.push(weekConfig);
    weekStartDate = addWeeks(weekStartDate, 1);
  } while (isSameMonth(weekStartDate, monthDate));

  return month;
};
