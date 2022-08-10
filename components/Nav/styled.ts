import styled from "@emotion/styled";

export const SNavWrap = styled.div<{menu: boolean}>(({theme, menu}) => `
  position: fixed;
  background-color: black;
  height: ${menu ? "100vh" : 0};
  width: 100vw;
  transition: all .2s ease;
  top: 0;
  left: 0;
  z-index: 100;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
`)


export const SNav = styled.div(({theme}) => `
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
        letter-spacing: 2.24px;
        text-transform: uppercase;
        font-weight: 600;
        color: white!important;
        transition: all .2s ease;
        &:hover{
          color: ${theme.palette.primary.main}!important;
        }
      }
    }
  }
`)

export const LeftMenu = styled.ul`
  li{
    a{
      font-size: 84px;
      &:hover{
        color: ${({theme}) => theme.palette.primary.main}!important;
      }
    }
  }
`

export const RightMenu = styled.ul`
  li{
    text-align: right;
    margin-bottom: 27px;
    a {
      font-size: 25px;
    }
  }
`