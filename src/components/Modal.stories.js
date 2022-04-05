import Modal from './Modal';
export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    onKeep: 'onSubmit',
    onDelete: 'onSubmit',
  },
};

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
};

export const Invisible = Template.bind({});
Invisible.args = {
  visible: false,
};
