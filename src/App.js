import { useState } from 'react';
import PastTripList from './components/PastTripList';
import pastTripList from './data';

function App() {
  const [pastTrips, setPastTrips] = useState(pastTripList);

  return (
    <main>
      <h1>Capstone Project</h1>
      <PastTripList pastTripList={pastTrips} />
    </main>
  );
}

export default App;
