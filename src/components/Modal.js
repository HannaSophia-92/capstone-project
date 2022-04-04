import Button from './Button';
import styled from 'styled-components';

export default function Modal({ onKeep, onDelete }) {
  return (
    <StyledModal>
      <span>Are you sure you want to delete this trip?</span>
      <Button variant={'submit'} onClick={onKeep}>
        no
      </Button>
      <Button variant={'danger'} onClick={onDelete}>
        yes
      </Button>
    </StyledModal>
  );
}

const StyledModal = styled.section`
  background-color: grey;
`;
