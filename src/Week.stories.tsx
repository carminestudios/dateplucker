import React from 'react';
import { Week } from './Week';
import { eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';
import { DayConfig } from './Day';

export default { title: 'Week', component: Week };

const today = new Date();

export const Normal = () => (
  <Week
    week={eachDayOfInterval({ start: startOfWeek(today), end: endOfWeek(today) }).map<DayConfig>(
      (date) => ({
        date,
      }),
    )}
  />
);
