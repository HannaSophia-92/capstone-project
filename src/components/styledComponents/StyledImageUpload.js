import styled from 'styled-components';

const EditImageUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  input[type='file'] {
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: -1px;
    left: 0;
    width: 0.1px;
    height: 0.1px;
  }

  label[for='files-edit'] {
    position: relative;
    font-size: 14px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    background-color: var(--color-gray);
    color: var(--color-light-gray);
    width: 170px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  width: 70%;
  position: relative;
`;

export { EditImageUpload, ImageWrapper, Image };
