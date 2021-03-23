import React from 'react';
import { Day } from './Day';

export default { title: 'Day', component: Day };

export const Normal = () => <Day date={new Date()} />;
export const Disabled = () => <Day date={new Date()} disabled />;
export const Current = () => <Day date={new Date()} current />;

export const CustomClassName = () => <Day date={new Date()} getClassName={(d: Date) => 'test'} />;
