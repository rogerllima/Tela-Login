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

  background: #7cbcbe  ;

  color: white;
  font-size: 40px;
  `

export const ContainerItems = styled.div`
  display: flex;
  justify-content: center;
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
`

export const ContainerTable = styled.div`
  display:flex;
  align-items:center;
  flex-direction: row;
  justify-content: center;

  font-size: 20px;
  border-color: #050505;

  height: 50vh;
;`

export const Table = styled.table`
  text-align: center;
  font-family: Montserrat, Arial, sans-serif;
	background-color: #f9fafb;

  width: 500px;
  height: 100px;

  border-radius: 5px;
`

export const Th = styled.th`
  background-color: DarkSlateGrey;
	color: #ffffff;
	font-weight: bold;
	font-size: 20px;
	border: 1px solid #54585d;
`

export const Td = styled.td`
  color: #636363;
	border: 1px solid #dddfe1;

`