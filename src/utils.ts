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
import { WeekStartsOn } from './types';

export const omitProps = (...props: Array<string | number>): any => ({
  shouldForwardProp: (prop: string | number) => !props.includes(prop),
});

export type MonthConfigSettings = {
  weekStartsOn?: WeekStartsOn;
  isDateAllowed?: (date: Date) => boolean;
}

export const getMonthConfig = (monthDate: Date, settings: MonthConfigSettings = {}) => {
  const today = new Date();
  const weekStartsOn = settings.weekStartsOn ?? 1;
  const { isDateAllowed } = settings;

  let weekStartDate = startOfWeek(startOfMonth(monthDate), { weekStartsOn });
  const month: MonthConfig = [];
  do {
    const weekConfig: WeekConfig = eachDayOfInterval({
      start: weekStartDate,
      end: endOfWeek(weekStartDate, { weekStartsOn }),
    }).map((date) => ({
      date,
      current: isSameDay(today, date),
      outOfContext: !isSameMonth(monthDate, date),
      disabled: isDateAllowed ? !isDateAllowed(date) : false,
    }));
    month.push(weekConfig);
    weekStartDate = addWeeks(weekStartDate, 1);
  } while (isSameMonth(weekStartDate, monthDate));

  return month;
};
