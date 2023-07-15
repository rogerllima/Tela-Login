import { styled } from "styled-components";

export const Button = styled.button`
  background-color: gray;
  color: white;
  padding: 20px;
  margin:0 15px;
  gap:10px;

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
`;

export const Container = styled.div`
  
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content: center;

  font-size: 40px;

  width: 100vw;
  height: 100vh;

`


export const StyledHeader = styled.header`
  padding: 10px;
    
  border: none;
  border-radius: 5px;

  background: black;

  color: white;
  font-size: 40px;
  }
  `
