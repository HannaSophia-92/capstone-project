import { useState } from 'react';

export default function FutureTripForm({ onCreateTrip }) {
  const [formData, setFormData] = useState('');

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      aria-labelledby="future-trips-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label htmlFor="destination">Add a new Destination:</label>
      <input
        type="text"
        id="destination"
        name="destination"
        onChange={handleOnChange}
        required
      ></input>

      <label htmlFor="date">Add Dates:</label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleOnChange}
      ></input>
      <button id="future-trips-form">Add Trip</button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onCreateTrip(formData);
  }
}
