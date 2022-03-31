import PastTripNotes from './PastTripNotes';

export default {
  title: 'components/PastTripNotes',
  component: PastTripNotes,
  argTypes: {},
};

const Template = args => <PastTripNotes {...args} />;

export const Default = Template.bind({});
Default.args = {};
