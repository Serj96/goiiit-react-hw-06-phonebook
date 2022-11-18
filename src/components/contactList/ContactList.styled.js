import styled from 'styled-components';

export const ContactField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  padding: 20px;
  width: 460px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

`;

export const Contact = styled.p`
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  align-items: center;
  color: #030c24;
  font-weight: 400;
  font-size: large;
`;

export const Number = styled.p`
    display: block;
    font-weight: 700;
    font-size: medium;
    margin: 0;
    color: #1651B8 ;
`;

export const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover,
  :focus {
    background-color: #4caf50;
    color: #fafaf8;
    transition: all 300ms ease;
  }
`;