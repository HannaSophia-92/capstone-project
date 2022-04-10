import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import {
  Form,
  Label,
  DateWrapper,
  FormWrapper,
  InputDate,
} from '../styledComponents/StyledForm';

export default function FutureTripForm({ onCreateTrip }) {
  const [formData, setFormData] = useState('');

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };

  return (
    <FormWrapper>
      <Form
        aria-labelledby="future-trips-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <ScreenReaderOnly>
          <h2 id="future-trips-form">New Trip</h2>
        </ScreenReaderOnly>
        <Label htmlFor="destination">Destination:</Label>
        <input
          type="text"
          id="destination"
          name="destination"
          onChange={handleOnChange}
          maxLength="100"
          placeholder="Country/City"
          required
        />

        <DateWrapper>
          <div>
            <Label htmlFor="startDate">Start:</Label>
            <InputDate
              type="date"
              id="startDate"
              name="startDate"
              onChange={handleOnChange}
              min={disablePastDate()}
              required
            />
          </div>
          <span>
            <ArrowIcon size={15} />
          </span>
          <div>
            <Label htmlFor="endDate">End:</Label>
            <InputDate
              type="date"
              id="endDate"
              name="endDate"
              onChange={handleOnChange}
              min={disablePastDate()}
              required
            />
          </div>
        </DateWrapper>

        <Label htmlFor="textNotes">Notes:</Label>
        <ScreenReaderOnly id="textNotes">Enter notes</ScreenReaderOnly>

        <textarea
          type="text"
          id="textNotes"
          name="textNotes"
          placeholder="Documents, Visa, Packing List..."
          onChange={handleOnChange}
          maxLength="500"
          rows="3"
        />
        <ButtonWrapper>
          <Button variant="add">Add Trip</Button>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();
    onCreateTrip({ ...formData, _id: nanoid() });
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowIcon = styled(HiOutlineArrowNarrowRight)`
  margin: 7px;
`;
