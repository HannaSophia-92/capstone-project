import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { Form, Label, Textarea } from '../styledComponents/StyledForm';
import axios from 'axios';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function PastTripNotes({ onHandleNewNote, _id }) {
  const [image, setImage] = useState('');
  const [process, setProcess] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper>
      <Form
        aria-labelledby="notes-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Label htmlFor="notes">Things to remember:</Label>
        <ScreenReaderOnly id="notes-form">
          Enter notes to remember
        </ScreenReaderOnly>
        <Textarea
          type="text"
          id="notes"
          name="notes"
          placeholder="Enter your notes..."
          maxLength="500"
          rows="3"
          required
        />
        {loading && <div>Uploading Image...{process}%</div>}
        <ImageUpload>
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <input
              type="file"
              name="file"
              aria-label="Upload a picture"
              onChange={upload}
              multiple="multiple"
            />
          )}
        </ImageUpload>
        <ButtonWrapper>
          <Button variant="add" type="submit">
            Save
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.notes.value.trim();
    onHandleNewNote({ note: inputValue, image }, _id);
    form.reset();
    setImage('');
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();

    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          setLoading(true);
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProcess(percent);
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
    setLoading(false);
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageUpload = styled.div`
  margin: 10px;
  input {
    border-radius: 10px;
    width: 100%;
  }
`;
