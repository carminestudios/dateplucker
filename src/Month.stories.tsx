import React from 'react';
import { Month } from './Month';
import { getMonthConfig } from './utils';

export default { title: 'Month', component: Month };

export const Normal = () => (
  <Month
    month={getMonthConfig(new Date())}
  />
);
