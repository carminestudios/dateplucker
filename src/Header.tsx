import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import { theme as defaultTheme } from './theme';
import { addMonths, eachDayOfInterval, endOfWeek, format, getWeek, startOfWeek } from 'date-fns';
import { WeekStartsOn } from './types';

export type OnMonthChange = (newMonth: Date) => void;

export interface HeaderProps {
  currentMonth: Date;
  format?: string;
  weekStartsOn?: WeekStartsOn;
  onChange: OnMonthChange;
  className?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({
  currentMonth,
  format: monthFormat = 'MMM yyyy',
  weekStartsOn = 1,
  onChange,
  className,
  children,
}) => {
  const start = startOfWeek(currentMonth, { weekStartsOn });
  const week = eachDayOfInterval({ start, end: endOfWeek(start, { weekStartsOn }) });
  const handlePrevClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onChange(addMonths(currentMonth, -1));
    },
    [onChange, currentMonth],
  );
  const handleNextClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onChange(addMonths(currentMonth, 1));
    },
    [onChange, currentMonth],
  );
  return (
    <>
      <HeaderContainer className={className}>
        {children ?? (
          <>
            <ChangeMonthButton onClick={handlePrevClick} />
            <MonthName>{format(currentMonth, monthFormat)}</MonthName>
            <ChangeMonthButton onClick={handleNextClick} nextMonth />
          </>
        )}
      </HeaderContainer>
      <DayContainer>
        {week.map((date) => (
          <Day key={date.getTime()}>{format(date, 'EEEEE')}</Day>
        ))}
      </DayContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  ${({ theme }) => theme?.header?.topContainer ?? defaultTheme.header.topContainer}
`;

const DayContainer = styled.div`
  ${({ theme }) => theme?.header?.dayContainer ?? defaultTheme.header.dayContainer}
`;

const Day = styled.div`
  ${({ theme }) => theme?.header?.day ?? defaultTheme.header.day}
`;

export interface ChangeMonthButtonProps {
  nextMonth?: boolean;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ChangeMonthButton: FunctionComponent<ChangeMonthButtonProps> = ({
  nextMonth = false,
  className,
  children,
  onClick,
}) => (
  <ButtonContainer className={className} onClick={onClick}>
    {children ?? (nextMonth ? '⇨' : '⇦')}
  </ButtonContainer>
);

const ButtonContainer = styled.button`
  ${({ theme }) => theme?.header?.changeMonthButton || defaultTheme.header.changeMonthButton}
`;

export const MonthName = styled.div`
  ${({ theme }) => theme?.header?.monthName ?? defaultTheme.header.monthName}
`;
