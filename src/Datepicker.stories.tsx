import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { DefaultTheme, css, ThemeProvider } from 'styled-components';
import { Datepicker } from './Datepicker';
import { getMonthConfig } from './utils';
import { useDateplucker } from './hooks';
import { DatepickerTheme, theme as defaultTheme } from './theme';
import { getDay, subDays } from 'date-fns';

export default { title: 'Datepicker', component: Datepicker, displayName: 'Datepicker' };

export const Normal = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <Datepicker
      value={subDays(currentMonth, 1)}
      currentMonth={currentMonth}
      month={getMonthConfig(currentMonth)}
      onCurrentMonthChange={setCurrentMonth}
      onChange={action('date change')}
    />
  );
};

export const WithHook = () => {
  const [datepickerProps] = useDateplucker();
  return (
    <Datepicker
      {...datepickerProps}
      value={subDays(new Date(), 1)}
      onChange={action('date change')}
    />
  );
};

export const WithDisabledDates = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <Datepicker
      value={subDays(currentMonth, 1)}
      currentMonth={currentMonth}
      month={getMonthConfig(currentMonth, { isDateAllowed: (date: Date) => getDay(date) === 1})}
      onCurrentMonthChange={setCurrentMonth}
      onChange={action('date change')}
    />
  );
};

const customTheme: DatepickerTheme = {
  header: {
    topContainer: css`
      ${defaultTheme.header.topContainer}
      background-color: hotpink;
    `,
  },
};

export const Themed = () => {
  const [datepickerProps] = useDateplucker();
  return (
    <ThemeProvider theme={customTheme}>
      {' '}
      <Datepicker {...datepickerProps} onChange={action('date change')} />
    </ThemeProvider>
  );
};
