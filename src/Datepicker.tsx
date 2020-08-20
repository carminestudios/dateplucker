import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { theme as defaultTheme } from './theme';
import { OnDateChange } from './Day';
import { MonthConfig, Month } from './Month';
import { Header } from './Header';

export interface DatepickerProps {
  value?: Date;
  currentMonth: Date;
  month: MonthConfig;
  headerFormat?: string;
  onChange?: OnDateChange;
  onCurrentMonthChange: OnDateChange;
  className?: string;
}

export const Datepicker: FunctionComponent<DatepickerProps> = ({
  value,
  currentMonth,
  month,
  headerFormat,
  onChange,
  onCurrentMonthChange,
  className,
  children,
}) => {
  return (
    <DatepickerContainer className={className}>
      {children ?? (
        <>
          <Header
            currentMonth={currentMonth}
            format={headerFormat}
            onChange={onCurrentMonthChange}
          />
          <Month month={month} value={value} onDateClick={onChange} />
        </>
      )}
    </DatepickerContainer>
  );
};

Datepicker.displayName = 'Datepicker';

const DatepickerContainer = styled.div`
  ${({ theme }) => theme?.datepicker?.container ?? defaultTheme.datepicker.container}
`;
