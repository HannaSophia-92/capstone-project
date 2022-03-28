import PastTripCard from './components/PastTripCard';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <Heading>Journi</Heading>
      <PastTripCard />
    </div>
  );
}

const Heading = styled.h1`
  margin: 20px;
  text-align: center;
`;

export default App;
