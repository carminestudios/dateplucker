import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { theme as defaultTheme } from './theme';
import { OnDateChange } from './Day';
import { MonthConfig, Month } from './Month';
import { Header } from './Header';

export interface DatepickerProps {
  currentMonth: Date;
  month: MonthConfig;
  onChange: OnDateChange;
  onCurrentMonthChange: OnDateChange;
  className?: string;
}

export const Datepicker: FunctionComponent<DatepickerProps> = ({
  currentMonth,
  month,
  onChange,
  onCurrentMonthChange,
  className,
}) => {
  return (
    <DatepickerContainer className={className}>
      <Header currentMonth={currentMonth} onChange={onCurrentMonthChange} />
      <Month month={month} onDateClick={onChange} />
    </DatepickerContainer>
  );
};

const DatepickerContainer = styled.div`
  ${({ theme }) => theme?.datepicker?.container ?? defaultTheme.datepicker.container}
`;
