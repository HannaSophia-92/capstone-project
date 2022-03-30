import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onClick: 'onClick',
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};

export const Add = Template.bind({});
Add.args = {
  children: 'Add your notes',
  variant: 'add',
};

export const GoBack = Template.bind({});
GoBack.args = {
  children: 'Go Back',
  variant: 'goBack',
};
