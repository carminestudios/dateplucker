import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Datepicker } from './Datepicker';
import { getMonthConfig } from './utils';

export default { title: 'Datepicker', component: Datepicker };

export const Normal = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <Datepicker
      currentMonth={currentMonth}
      month={getMonthConfig(currentMonth)}
      onCurrentMonthChange={setCurrentMonth}
      onChange={action('date change')}
    />
  );
};
