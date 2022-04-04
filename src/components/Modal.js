import Button from './Button';
import styled from 'styled-components';

export default function Modal({ onKeep, onDelete }) {
  return (
    <Background>
      <StyledModal>
        <span>Are you sure you want to delete this trip?</span>
        <Button variant={'submit'} onClick={onKeep}>
          no
        </Button>
        <Button variant={'danger'} onClick={onDelete}>
          yes
        </Button>
      </StyledModal>
    </Background>
  );
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
  line-height: 1.5em;
  padding: 15px;
  width: 70%;
  margin: 30vh auto;
  background-color: #2f2f2f;
  color: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 18px;
`;
