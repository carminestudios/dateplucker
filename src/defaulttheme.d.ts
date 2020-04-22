import 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';

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

declare module 'styled-components' {
  export interface DefaultTheme extends DatepickerTheme {}
}
