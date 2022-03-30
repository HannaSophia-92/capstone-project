import PastTripNotes from './PastTripNotes.js';

export default {
  title: 'components/PastTripNotes',
  component: PastTripNotes,
  argTypes: {
    onHandleNewNote: 'onSubmit',
  },
};

const Template = args => <PastTripNotes {...args} />;

export const Default = Template.bind({});
Default.args = {};
