import styled from 'styled-components';

export const InputField = styled.input`
  padding: 5px;
  margin-left: 10px;
  border-radius: 10px;
  outline: none;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 700;
  font-size: medium;
  color: #1651b8;
  transition: all 300ms ease;

  :hover,
  :focus {
    border-color: gray;
    transition: all 300ms ease;
  }
`;

export const Lable = styled.label`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: start;
  color: #525355;
  font-style: oblique 90deg;
  font-weight:600;
  font-size: 18px;
  margin: 10px;
`;
