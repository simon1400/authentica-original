import styled from "@emotion/styled";

export const Footer = styled.footer`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: -1;
  a{
    text-decoration: none;
  }
`

export const Content = styled.div`
  margin: auto;
  text-align: center;
  display: inline-block;
  a{
    h2{
      transition: all .5s ease;
    }
    &:hover{
      h2{
        color: ${({theme}) => theme.palette.primary.main};
      }
    }
  }
`

export const Label = styled.label(({theme}) => `
  color: ${theme.palette.primary.main};
  font-size: 16px;
  letter-spacing: 2.56px;
  line-height: 1;
  font-weight: bold;
  margin-top: ${theme.spacing(6)};
`);

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 50px;
  p{
    color: white;
    font-size: 19px;
    &:first-of-type{
      margin-top: 0;
    }
    &:last-of-type{
      margin-bottom: 0;
    }
    a{
      color: white;
    }
  }
  ul{
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    li{
      list-style-type: none;
      line-height: 1;
      padding-left: 0;
      font-size: 19px;
      line-height: 1.58;
      color: white;
      &:before{
        display: none;
      }
      a{
        font-size: 19px;
        line-height: 1.58;
        color: white;
      }
    }
  }
`
