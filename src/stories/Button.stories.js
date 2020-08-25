import React from 'react';

import Button from '../components/Button';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Interactions/Button',
	component: Button,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onClick: action('onClick'),
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	/*The text content of a button */
	label: 'Button',
};
