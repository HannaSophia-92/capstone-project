import PastTripList from './PastTripList.js';

export default {
  title: 'components/PastTripList',
  component: PastTripList,
};

const Template = args => <PastTripList {...args} />;

export const Default = Template.bind({});
Default.args = {};
