import NotesList from './NotesList.js';

export default {
  title: 'components/NotesList',
  component: NotesList,
  argTypes: {},
};

const Template = args => <NotesList {...args} />;

export const Default = Template.bind({});
Default.args = {};
