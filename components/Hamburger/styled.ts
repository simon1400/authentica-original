import styled from "@emotion/styled";
import { checkColor } from "utility/checkColor";

export const StyledBurger = styled.button<{open: boolean; background: string;}>(({open, background}) => `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 35px;
    height: 2px;
    border-radius: 10px;
    transition: all 0.3s linear;
    background: ${checkColor(background) || open ? "white" : "black"}!important;
    position: relative;
    transform-origin: 5px;

    :first-of-type {
      transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${open ? '0' : '1'};
      transform: ${open ? 'translateX(10px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`)


export const BurgerWrap = styled.div<{menu: boolean}>(({theme, menu}) => `
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 105;
  span{
    font-size: 14px;
    letter-spacing: 2.24px;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-right: 17px;
    transition: all .2s ease;
    @media (max-width: 640px) {
      display: none;
    }
  }
  &:hover{
    span{
      color: ${theme.palette.primary.main}!important;
    }
  }
`)