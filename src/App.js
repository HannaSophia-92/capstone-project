import { useState } from 'react';
import PastTripList from './components/PastTripList';
import pastTripList from './data';

function App() {
  const [pastTrips, setPastTrips] = useState(pastTripList);

  return (
    <main>
      <PastTripList pastTripList={pastTrips} />
    </main>
  );
}

export default App;
