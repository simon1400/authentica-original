import styled from "@emotion/styled";

export const StyledBurger = styled.button<{open: boolean}>(({open}) => `
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
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
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
    color: ${menu ? "white" : 'black'}!important;
  }
  div{
    background: ${menu ? "white" : 'black'}!important;
  }
  &:hover{
    span{
      color: ${theme.palette.primary.main}!important;
    }
  }
`)