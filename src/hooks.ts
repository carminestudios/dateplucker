import { MonthConfig } from './Month';
import { addMonths } from 'date-fns';
import { useEffect, useState, useCallback } from 'react';
import { getMonthConfig } from './utils';

type Result = [
  {
    month: MonthConfig;
    currentMonth: Date;
    onCurrentMonthChange: (newMonth: Date) => void;
  },
  (newDate: Date) => void
];

export const useDateplucker = (initialDate?: Date): Result => {
  const [currentMonth, setCurrentMonth] = useState(initialDate ?? new Date());
  const [month, setMonthConfig] = useState<MonthConfig>([]);

  useEffect(() => {
    const month = getMonthConfig(currentMonth);
    setMonthConfig(month);
  }, [currentMonth]);

  return [
    {
      month,
      currentMonth,
      onCurrentMonthChange: setCurrentMonth,
    },
    setCurrentMonth,
  ];
};
