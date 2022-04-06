import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ScreenReaderOnly from './ScreenReaderOnly';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function FutureTripForm({ onCreateTrip }) {
  const [formData, setFormData] = useState('');

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({
      _id: nanoid(),
      ...formData,
      [name]: value.trim(),
    });
  };

  return (
    <Form
      aria-labelledby="future-trips-form"
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
      />

      <InputDateWrapper>
        <div>
          <Label htmlFor="startDate">Start:</Label>
          <InputDate
            type="date"
            id="startDate"
            name="startDate"
            onChange={handleOnChange}
            required
          />
        </div>
        <span>
          <HiOutlineArrowNarrowRight size={20} />
        </span>
        <div>
          <Label htmlFor="endDate">End:</Label>
          <InputDate
            type="date"
            id="endDate"
            name="endDate"
            onChange={handleOnChange}
            required
          />
        </div>
      </InputDateWrapper>

      <Label htmlFor="notes">Notes:</Label>
      <ScreenReaderOnly id="notes">Enter notes</ScreenReaderOnly>

      <textarea
        type="text"
        id="notes"
        name="notes"
        placeholder="Documents, Visa, Packing List..."
        onChange={handleOnChange}
        maxLength="500"
        rows="3"
      />

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
  margin: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 10px;
`;

const InputDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const InputDate = styled.input`
  color: gray;
  margin-top: 12px;
`;
