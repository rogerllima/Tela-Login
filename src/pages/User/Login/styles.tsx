import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 100vh;

`

export const Form = styled.form`  
background-color: #f4f4f4;

display: flex;
flex-direction: column;
align-items:center;

padding: 20px;
border-radius: 5px;

gap:10px;
width: 30%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const StyledButton = styled.button`
  background-color: #4caf4fc3;
  color: white;

  width:100px;
  height:50px;

  padding: 10px;
  margin: 10px 50px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity:0.7;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  &:hover{
    opacity: 1;
    transition: opacity 1s easeInOut 0s;
    background-color: #4caf4f;

  } ;
`

export const StyledBackButton = styled.button`
  color: white;
  background-color: #eb1010b9;

  width:100px;
  height:50px;

  padding: 10px;
  margin: 10px 50px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity:0.7;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  &:hover{
    opacity: 1;
    transition: opacity 1s easeInOut 0s;
    background-color: #eb1010ea;
  } ;
`