import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">PastTrips</NavLink>
      <NavLink to="/formPage">FormPage</NavLink>
      <NavLink to="/futurePage">FuturePage</NavLink>
    </nav>
  );
}
