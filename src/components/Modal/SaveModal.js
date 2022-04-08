import Button from '../Button/Button';
import styled from 'styled-components';
import { HiHome } from 'react-icons/hi';

export default function SaveModal({ onKeep, onFinishTrip, children }) {
  return (
    <Background>
      <StyledModal>
        <span>{children}</span>
        <Button variant={'keep'} onClick={onKeep}>
          No, keep it here!
        </Button>
        <Button variant={'save'} onClick={onFinishTrip}>
          Save it! <HomeIcon size={15} />
        </Button>
      </StyledModal>
    </Background>
  );
}

const HomeIcon = styled(HiHome)`
  position: absolute;
  bottom: 26px;
  right: 85px;
`;

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
  background-color: #2f2f2f;
  color: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 18px;
`;
