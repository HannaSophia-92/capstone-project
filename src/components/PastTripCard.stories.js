import PastTripCard from './PastTripCard.js';

export default {
  title: 'components/PastTripCard',
  component: PastTripCard,
};

const Template = args => <PastTripCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  _id: '1',
  country: 'South Africa',
  city: 'Cape Town',
};
