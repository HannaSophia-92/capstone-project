import PastTripNotes from './PastTripNotes.js';

export default {
  title: 'components/PastTripNotes',
  component: PastTripNotes,
};

const Template = args => <PastTripNotes {...args} />;

export const Default = Template.bind({});
Default.args = {};
