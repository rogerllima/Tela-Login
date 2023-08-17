import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 100vh;

`

export const StyledInput = styled.input `
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;

  padding: 10px;
  margin-top: 10px;

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
  } ;
`
export const StyledBackButton = styled.button`
  background-color: #eb1010;
  color: white;

  width:100px;
  height:40px;

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
  } ;
`