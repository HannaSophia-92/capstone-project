import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 20px;
  color: var(--color-white);
  border: 1px solid var(--color-dark-gray);
  background-color: var(--color-dark-gray);
  border-radius: 40px;
  box-shadow: var(--box-shadow);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 10px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const InputDate = styled.input`
  color: gray;
  margin-top: 12px;
`;

const ImageUpload = styled.div`
  input[type='file'] {
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: -1px;
    left: 0;
    width: 0.1px;
    height: 0.1px;
  }

  label[for='files'] {
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

export {
  Form,
  Label,
  Textarea,
  DateWrapper,
  FormWrapper,
  InputDate,
  ImageUpload,
};
