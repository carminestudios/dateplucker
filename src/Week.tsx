import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { theme as defaultTheme } from './theme';
import { Day, DayConfig, OnDateChange } from './Day';

export type WeekConfig = Array<DayConfig>;

export interface WeekProps {
  week?: WeekConfig;
  withWeekNumbers?: boolean;
  onDateClick?: OnDateChange;
  className?: string;
}

export const Week: FunctionComponent<WeekProps> = ({
  week,
  withWeekNumbers,
  onDateClick,
  className,
  children,
}) => {
  return (
    <WeekContainer className={className}>
      {children ?? (
        <>
          {withWeekNumbers ? <WeekNr></WeekNr> : null}
          {week?.map(({ date, ...props }) => (
            <Day key={date.getTime()} date={date} onClick={onDateClick} {...props} />
          ))}
        </>
      )}
    </WeekContainer>
  );
};

const WeekContainer = styled.div`
  display: flex;

  ${({ theme }) => theme?.week?.container ?? defaultTheme.week.container};
`;

const WeekNr = styled.div`
  ${({ theme }) => theme?.week?.weekNr ?? defaultTheme.week.weekNr};
`;
