import FutureTripCard from './FutureTripCard.js';

export default {
  title: 'components/FutureTripCard',
  component: FutureTripCard,
  argTypes: {
    onCreateTrip: 'createTrip',
  },
};

const Template = args => <FutureTripCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  _id: '1',
  destination: 'South Africa',
  date: '2022-04-28 - 2022-05-07',
};
