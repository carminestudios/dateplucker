import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getWeek } from 'date-fns';
import { theme as defaultTheme } from './theme';
import { Week, WeekConfig } from './Week';
import { OnDateChange } from './Day';

export type MonthConfig = Array<WeekConfig>;

export interface MonthProps {
  month?: MonthConfig;
  withWeekNumbers?: boolean;
  className?: string;
  onDateClick?: OnDateChange;
}

export const Month: FunctionComponent<MonthProps> = ({
  month,
  withWeekNumbers,
  className,
  onDateClick,
  children,
}) => {
  return (
    <MonthContainer className={className}>
      {children ??
        month?.map((week) => (
          <Week
            key={getWeek(week[0].date)}
            week={week}
            withWeekNumbers={withWeekNumbers}
            onDateClick={onDateClick}
          />
        ))}
    </MonthContainer>
  );
};

const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme?.month?.container ?? defaultTheme.month.container};
`;
