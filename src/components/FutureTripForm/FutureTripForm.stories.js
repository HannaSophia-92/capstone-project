import FutureTripForm from './FutureTripForm';

export default {
  title: 'components/FutureTripForm',
  component: FutureTripForm,
  argTypes: {
    onCreateTrip: 'onSubmit',
  },
};

const Template = args => <FutureTripForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
