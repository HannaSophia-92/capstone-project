import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

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
    <Form
      aria-labelledby="future-trips-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 id="future-trips-form">New Trip</h2>
      <label htmlFor="destination">Add a new Destination:</label>
      <input
        type="text"
        id="destination"
        name="destination"
        onChange={handleOnChange}
        maxLength="100"
        placeholder="Country/City"
        required
      ></input>

      <label htmlFor="date">Add Dates:</label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleOnChange}
      ></input>
      <Button>Add Trip</Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onCreateTrip(formData);
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px;
`;
