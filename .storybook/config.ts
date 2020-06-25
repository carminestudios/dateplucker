import { configure, addDecorator, setAddon } from '@storybook/react';
import centered from '@storybook/addon-centered/react';import { withInfo } from '@storybook/addon-info';

const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator(withInfo);
addDecorator(centered);

configure(req, module);
