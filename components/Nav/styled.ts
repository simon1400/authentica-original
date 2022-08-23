import styled from "@emotion/styled";

import { animated } from 'react-spring'

export const SNavWrap = styled.div<{menu: boolean}>(({menu}) => `
  position: fixed;
  background-color: black;
  height: ${menu ? "100vh" : 0};
  width: 100vw;
  transition: opacity .5s ease;
  top: 0;
  left: 0;
  z-index: 101;
  opacity: ${menu ? 1 : 0};
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  @media(max-width: 640px) {
    padding-left: 0;
    padding-right: 0;
  }
`)


export const SNav = styled.div<{menu: boolean}>(({theme, menu}) => `
  display: flex;
  justify-content: space-between;
  ul{
    padding-left: 0;
    z-index: 106;
    margin: 0;
    padding-top: 100px;
    padding-bottom: 100px;
    display: block;
    position: relative;
    li{
      list-style-type: none;
      line-height: 1;
      display: block;
      font-size: 14px;
      a{
        text-decoration: none;
        display: inline-block;
        transition: all .2s ease;
        &:hover{
          color: ${theme.palette.primary.main}!important;
        }
      }
    }
  }
  @media(max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    ul{
      padding: 0;
    }
  }
`)

export const LeftMenu = styled.ul`
  li{
    a{
      font-size: 84px;
      font-weight: 600;
    }
  }
  @media(max-width: 640px) {
    margin-bottom: 50px!important;
    li{
      text-align: right !important;
      margin-bottom: 10px;
      a{
        font-size: 30px;
      }
    }
  }
`

export const RightMenu = styled.ul`
  li{
    text-align: right;
    margin-bottom: 13px;
    a {
      font-size: 25px;
    }
  }
  @media(max-width: 640px) {
    li{
      margin-bottom: 10px;
      a{
        font-size: 22px;
      }
    }
  }
`

export const NavItem = styled.li<{active: boolean}>(({theme, active}) => `
  a{
    color: ${active ? theme.palette.primary.main : "white"}!important;
  }
`)