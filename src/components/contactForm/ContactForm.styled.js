import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Lable = styled.label`
  display: block;
  text-align: start;
  font-size: 20px;
  font-weight: 300;
`;

export const InputField = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const ErrorMess = styled(ErrorMessage)`
  margin: 5px;
  color: #f45707;
  font-style: italic;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: left;
`;
export const Button = styled.button`
  width: 25%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 0 auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover {
    background-color: #45a049;
}
}
`;
