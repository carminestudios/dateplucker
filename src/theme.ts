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
  };
  week?: {
    container?: FlattenSimpleInterpolation;
    weekNr?: FlattenSimpleInterpolation;
  };
  month?: {
    container?: FlattenSimpleInterpolation;
  };
  header?: {
    container?: FlattenSimpleInterpolation;
    changeMonthButton?: FlattenSimpleInterpolation;
    monthName?: FlattenSimpleInterpolation;
  };
};

export const theme: Required<DefaultTheme> = {
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
    container: css`
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
  },
};
