import PastTripList from './components/PastTripList';
import pastTripList from './data';

function App() {
  console.log(pastTripList);

  return (
    <div>
      <h1>Welcome to my capstone project</h1>
      <ul>
        {pastTripList.map(({ country, city, _id }) => (
          <PastTripList key={_id} country={country} city={city} />
        ))}
      </ul>
    </div>
  );
}

export default App;
