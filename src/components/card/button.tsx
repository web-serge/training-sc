import styled, {css} from "styled-components";
import {myTheme} from "../../styles/MyTheme";

type buttonPropsType = {
    active?: boolean
    type?: 'primary' | 'outlined'
}
export const Button = styled.button<buttonPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${myTheme.color.primary};
  cursor: pointer;
  font-weight: 700;
  transition: 1s;
  line-height: 20px;
  font-size: 10px;
  background-color: transparent;
  font-family: inherit;
  
  &:hover {
    border-color: darkblue;
  }
  
  ${props => props.active && css<buttonPropsType>`
    box-shadow: 0 0 3px 3px ${myTheme.color.secondary};
  `}
  
  ${props => props.type === 'primary' && css<buttonPropsType>`
    background-color: ${myTheme.color.primary};
    color: #fff;
  `}
  
  ${props => props.type === 'outlined' && css<buttonPropsType>`
    color: ${myTheme.color.primary};
  `}
`