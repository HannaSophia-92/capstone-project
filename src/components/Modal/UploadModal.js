import Button from '../Button/Button';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function UploadModal({ onCancel, children, moveImage }) {
  const [image, setImage] = useState('');

  return (
    <Background>
      <StyledModal>
        <span>{children}</span>
        <ImageUpload>
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <input
              type="file"
              name="file"
              aria-label="Upload a picture"
              onChange={upload}
            />
          )}
        </ImageUpload>
        <Button variant={'keep'} onClick={onCancel}>
          Cancel!
        </Button>
        <Button variant={'save'} onClick={() => moveImage(image)}>
          Save!
        </Button>
      </StyledModal>
    </Background>
  );

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
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }
}

const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

const StyledModal = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  line-height: 1.5em;
  padding: 15px;
  width: 70%;
  margin: 30vh auto;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 18px;
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
