import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import { theme as defaultTheme } from './theme';
import { addMonths, format } from 'date-fns';

export type OnMonthChange = (newMonth: Date) => void;

export interface HeaderProps {
  currentMonth: Date;
  format?: string;
  onChange: OnMonthChange;
  className?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({
  currentMonth,
  format: monthFormat = 'MMM',
  onChange,
  className,
  children,
}) => {
  const handlePrevClick = useCallback(() => onChange(addMonths(currentMonth, -1)), [
    onChange,
    currentMonth,
  ]);
  const handleNextClick = useCallback(() => onChange(addMonths(currentMonth, 1)), [
    onChange,
    currentMonth,
  ]);
  return (
    <HeaderContainer className={className}>
      {children ?? (
        <>
          <ChangeMonthButton onClick={handlePrevClick} />
          <MonthName>{format(currentMonth, monthFormat)}</MonthName>
          <ChangeMonthButton onClick={handleNextClick} nextMonth />
        </>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  ${({ theme }) => theme?.header?.container ?? defaultTheme.header.container}
`;

export interface ChangeMonthButtonProps {
  nextMonth?: boolean;
  className?: string;
  onClick: () => void;
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
