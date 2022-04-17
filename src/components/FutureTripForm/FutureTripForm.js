import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import {
  Form,
  Label,
  DateWrapper,
  FormWrapper,
  InputDate,
} from '../styledComponents/StyledForm';
import { Link } from 'react-router-dom';

export default function FutureTripForm({ onCreateTrip, locationInfos }) {
  console.log(locationInfos);
  const [formData, setFormData] = useState('');

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
        <Label htmlFor="destination"></Label>
        Destination:
        <Input
          defaultValue={locationInfos ? locationInfos[2].text : undefined}
          type="text"
          id="destination"
          name="destination"
          maxLength="100"
          placeholder="Country/City"
        />
        <Button variant={'goToMap'}>
          <StyledLink to="/mapPage">
            <LocationIcon size={25} />
          </StyledLink>
        </Button>
        <DateWrapper>
          <div>
            <Label htmlFor="startDate">Start:</Label>
            <InputDate
              type="date"
              id="startDate"
              name="startDate"
              min={disablePastDate()}
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
              min={disablePastDate()}
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
    const { destination, startDate, endDate, textNotes } =
      event.target.elements;
    onCreateTrip({
      destination: destination.value,
      startDate: startDate.value,
      endDate: endDate.value,
      textNotes: textNotes.value,
      coordinates: [locationInfos[0], locationInfos[1]],
      _id: nanoid(),
    });
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

const LocationIcon = styled(MdLocationOn)`
  position: absolute;
  right: 10px;
  top: 35px;
`;

const Input = styled.input`
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  color: var(--color-yellow);
`;
