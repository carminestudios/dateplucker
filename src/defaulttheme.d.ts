import 'styled-components';
import { DatepickerTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends DatepickerTheme {}
}
