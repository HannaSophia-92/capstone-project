import Button from '../Button/Button';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { Label } from '../styledComponents/StyledForm';
import { MdOutlineCloudUpload as UploadIcon } from 'react-icons/md';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import {
  RemoveImage,
  ImageWrapper,
  ImageUpload,
  Image,
} from '../styledComponents/StyledImageUpload';
import { IconButton } from '../Button/Button';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function UploadModal({ onCancel, children, moveImage }) {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);

  return (
    <Background>
      <StyledModal>
        <span>{children}</span>
        {loading && <div>Uploading Image...{process}%</div>}
        <ImageUpload>
          {image ? (
            <ImageWrapper>
              <Image src={image} alt="" />
              <RemoveImage
                size={20}
                variant="deleteImage"
                onClick={handleRemovePic}
                aria-label="Remove Image"
              />
            </ImageWrapper>
          ) : (
            <>
              <input
                type="file"
                name="file"
                aria-label="Upload a picture"
                onChange={upload}
                id="files"
              />
              <Label htmlFor="files">
                Upload image
                <ScreenReaderOnly>Upload your image</ScreenReaderOnly>
                <IconButton variant="upload" aria-label="Upload your image">
                  <UploadIcon size={25} />
                </IconButton>
              </Label>
            </>
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
        onUploadProgress: progressEvent => {
          setLoading(true);
          let percent = Math.round(
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

  function handleRemovePic() {
    setImage('');
    setProcess(0);
    setLoading(false);
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
  margin: 15vh auto;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 18px;
`;
