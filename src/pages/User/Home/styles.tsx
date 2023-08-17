import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const ul = styled.ul`
  display: flex;
  color: #ffffff;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 12px;
  font-weight: 600;
  padding: 20px 15px;
  gap: 35px;
  align-items: center;
  height: 12vh;
`
export const img = styled.img`
  height: 12vh;
  margin-right: 50px;
`

export const Li = styled.li`
  color: #ffffff;
  display: inline;
  margin-left: 40px;
`

export const Container = styled.div`
  opacity: 1;
  transition: all .3s ease-in-out 0s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`

export const NavLink = styled(Link)`
  color:#645757;
  &:hover{
  opacity: 1;
  transition: opacity 1s easeInOut 0s;
  color: #000000ca
}

`

