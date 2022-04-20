import styled from 'styled-components';
import { FiTrash as Delete } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import React from 'react';
import Button from '../Button/Button';
import { FaEdit as Edit } from 'react-icons/fa';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { Form, Label, Textarea } from '../styledComponents/StyledForm';
import { MdOutlineCloudUpload as Upload } from 'react-icons/md';
import axios from 'axios';
import { TiDeleteOutline as DeleteImage } from 'react-icons/ti';
import {
  EditImageUpload,
  ImageWrapper,
  Image,
} from '../styledComponents/StyledImageUpload';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function PastTripNotes({
  note,
  onDelete,
  image,
  _id,
  onEditNotes,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [picture, setPicture] = useState(image);
  const [process, setProcess] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {isEditing ? (
        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          aria-labelledby="edit-form"
        >
          <ScreenReaderOnly>
            <h2 id="edit-form">Edit notes</h2>
          </ScreenReaderOnly>

          <div>
            <Label htmlFor="note">Things to remember:</Label>
            <ScreenReaderOnly id="notes-form">
              Enter notes to remember
            </ScreenReaderOnly>
            <Textarea
              type="text"
              id="note"
              defaultValue={note}
              maxLength="500"
              rows="5"
            />
          </div>

          <EditImageUpload>
            {picture ? (
              <ImageWrapper>
                <Image src={picture} alt="" />

                <Button variant="deleteImage" onClick={handleRemovePic}>
                  <RemoveImage size={25} />
                </Button>
              </ImageWrapper>
            ) : (
              <>
                <input
                  type="file"
                  name="file"
                  aria-label="Upload a picture"
                  multiple="multiple"
                  id="files-edit"
                  onChange={upload2}
                />
                <Label htmlFor="files-edit">
                  Upload image
                  <ScreenReaderOnly>Upload your image</ScreenReaderOnly>
                  <UploadIcon size={25} />
                </Label>
              </>
            )}
          </EditImageUpload>
          <ButtonWrapper>
            <Button variant="add" category="Save changes" type="submit">
              Submit changes
            </Button>
          </ButtonWrapper>
        </Form>
      ) : (
        <ListEntry>
          <p>{note}</p>
          <UploadedImage src={picture} alt=""></UploadedImage>
          <Button
            variant="edit"
            type="button"
            aria-labelledby="Edit your card"
            onClick={() => setIsEditing(!isEditing)}
          >
            <EditIcon size={20} />
            <ScreenReaderOnly>Edit Card</ScreenReaderOnly>
          </Button>
          <Button variant="delete" onClick={() => setIsVisible(!isVisible)}>
            <DeleteIcon size={20} />
          </Button>
        </ListEntry>
      )}
      {isVisible && (
        <Modal
          onDelete={() => onDelete(_id)}
          onKeep={() => setIsVisible(!isVisible)}
        >
          Are you sure you want to delete this note?
        </Modal>
      )}
    </>
  );

  function upload2(event) {
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
    setPicture(response.data.url);
    setLoading(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { note } = event.target.elements;
    onEditNotes({
      note: note.value,
      image: picture,
      _id: _id,
    });
    setIsEditing(false);
  }

  function handleRemovePic() {
    setPicture('');
    setProcess(0);
    setLoading(false);
  }
}

const ListEntry = styled.li`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  padding: 16px;
  margin: 0 10px;
  border-radius: 20px;
  min-height: 110px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  position: relative;
  box-shadow: var(--box-shadow);
`;

const UploadedImage = styled.img`
  width: 100%;
  margin: 10px 0;
`;

const DeleteIcon = styled(Delete)`
  position: absolute;
  bottom: 10px;
  right: 45px;
`;

const EditIcon = styled(Edit)`
  position: absolute;
  bottom: 10px;
  right: 12px;
`;

const UploadIcon = styled(Upload)`
  position: absolute;
  bottom: 5px;
  right: 20px;
  color: var(--color-yellow);
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const RemoveImage = styled(DeleteImage)`
  position: absolute;
  top: 0;
  right: 0;
`;
