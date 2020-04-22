import React, { FunctionComponent, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { getDate } from 'date-fns';
import { theme as defaultTheme } from './theme';
import { omitProps } from './utils';

export type OnDateChange = (date: Date) => void;

export type DayConfig = {
  date: Date;
  disabled?: boolean;
  current?: boolean;
  outOfContext?: boolean;
};

export interface DayProps extends DayConfig {
  className?: string;
  onClick?: OnDateChange;
}

export const Day: FunctionComponent<DayProps> = ({
  date,
  disabled,
  current,
  outOfContext,
  className,
  onClick,
  children,
}) => {
  const handleClick = useCallback(() => onClick?.(date), [onClick]);

  return (
    <DayContainer
      className={className}
      disabled={disabled}
      outOfContext={outOfContext}
      current={current}
      role="button"
      onClick={handleClick}>
      {children ?? getDate(date)}
    </DayContainer>
  );
};

const DayContainer = styled.div.withConfig(omitProps('disabled', 'current'))<
  Pick<DayConfig, 'disabled' | 'current' | 'outOfContext'>
>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme?.day?.container ?? defaultTheme.day.container};
  ${({ disabled, theme }) => (disabled ? theme?.day?.disabled ?? defaultTheme.day.disabled : null)}
  ${({ current, theme }) => (current ? theme?.day?.current ?? defaultTheme.day.current : null)}
  ${({ outOfContext, theme }) => (outOfContext ? theme?.day?.outOfContext ?? defaultTheme.day.outOfContext : null)}
`;
