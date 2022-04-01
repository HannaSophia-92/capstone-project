import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ScreenReaderOnly from './ScreenReaderOnly';

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
      aria-labelledby="future-trips-forsm"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 id="future-trips-form">New Trip</h2>
      <Label htmlFor="destination">Add a new Destination:</Label>
      <input
        type="text"
        id="destination"
        name="destination"
        onChange={handleOnChange}
        maxLength="100"
        placeholder="Country/City"
        required
      ></input>

      <Label htmlFor="startDate">Add Dates:</Label>
      <InputDateWrapper>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={handleOnChange}
        ></input>
        <Label htmlFor="endDate">
          <ScreenReaderOnly>Add Dates:</ScreenReaderOnly>
        </Label>

        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={handleOnChange}
        ></input>
      </InputDateWrapper>

      <Button variant="add">Add Trip</Button>
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

const Label = styled.label`
  font-size: 16px;
  margin-top: 10px;
`;

const InputDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
