import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: DarkSlateGrey;
  color: white;

  padding: 10px;
  margin-top: 10px;
  margin-right: 5px;

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

export const StyledHeader = styled.header`
  display:flex;
  align-items:center;
  padding: 10px;
    
  border: none;
  border-radius: 5px;

  background: CadetBlue  ;

  color: white;
  font-size: 40px;
  };`

  export const ContainerItems = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;

  `
  export const ContainerGerenciador = styled.div`

  display:flex;
  align-items:center;
  flex-direction: row;
  justify-content: center;
  font-size: 40px;
};`

export const ContainerLogout = styled.div`
  display:flex;
  align-items:center;
  flex-direction: row;
  font-size: 40px;
  border-color: red;
  width: 180;
  height: 20vh;
};`