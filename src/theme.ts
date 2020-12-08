import { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

export type DatepickerTheme = {
  datepicker?: {
    container?: FlattenSimpleInterpolation;
  };
  day?: {
    container?: FlattenSimpleInterpolation;
    disabled?: FlattenSimpleInterpolation;
    current?: FlattenSimpleInterpolation;
    outOfContext?: FlattenSimpleInterpolation;
    isSelected?: FlattenSimpleInterpolation;
  };
  week?: {
    container?: FlattenSimpleInterpolation;
    weekNr?: FlattenSimpleInterpolation;
  };
  month?: {
    container?: FlattenSimpleInterpolation;
  };
  header?: {
    topContainer?: FlattenSimpleInterpolation;
    changeMonthButton?: FlattenSimpleInterpolation;
    monthName?: FlattenSimpleInterpolation;
    dayContainer?: FlattenSimpleInterpolation;
    day?: FlattenSimpleInterpolation;
  };
};

export const theme: Required<DatepickerTheme> = {
  datepicker: {
    container: css`
      display: flex;
      flex-direction: column;
    `,
  },
  day: {
    container: css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border: 1px solid #3b3b3b;
      cursor: pointer;

      & + & {
        border-left: 0;
      }
    `,
    disabled: css`
      opacity: 0.4;
    `,
    current: css`
      background-color: #83eeff;
    `,
    outOfContext: css`
      opacity: 0.4;
      background-color: #ccc;
    `,
    isSelected: css`
      background-color: rgba(255, 165, 0, 1);
    `,
  },

  week: {
    container: css``,
    weekNr: css`
      width: 30px;
      background-color: #3b3b3b;
      color: white;
    `,
  },
  month: { container: css`` },
  header: {
    topContainer: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
    changeMonthButton: css`
      border: 0;
      padding: 3px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      background: transparent;
    `,
    monthName: css`
      font-size: 16px;
      font-weight: 500;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    dayContainer: css`
      display: flex;
    `,

    day: css`
      font-size: 12px;
      font-weight: 600;
      width: 31px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 2px;
    `,
  },
};
