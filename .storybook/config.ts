import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

const req = require.context('../src', true, /\.stories\.tsx$/);
addDecorator(centered);
configure(req, module);
