import { MonthConfig } from './Month';
import { startOfWeek, endOfWeek, isSameMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { WeekConfig } from './Week';
import { useEffect, useState } from 'react';
import { getMonthConfig } from './utils';

type Result = {
  month: MonthConfig;
  setCurrentDate: (newDate: Date) => void;
};

export const useDateplucker = (initialDate?: Date): Result => {
  const [currentDate, setCurrentDate] = useState(initialDate ?? new Date());
  const [month, setMonthConfig] = useState<MonthConfig>([]);

  useEffect(() => {
    const month = getMonthConfig(currentDate);
    setMonthConfig(month);
  }, [currentDate]);

  return {
    month,
    setCurrentDate,
  };
};
