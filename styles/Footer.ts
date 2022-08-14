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
  @media(max-width: 640px) {
    display: block;
    height: auto;
    min-height: 100vh;
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
  @media(max-width: 640px) {
    display: block;
    margin-top: 70px;
    a{
      h2{
        font-size: 27px;
        margin-bottom: 30px;
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
  @media(max-width: 640px) {
    font-size: 12px;
  }
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
    @media(max-width: 640px) {
      text-align: center;
      font-size: 16px;
    }
  }
  ul{
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    @media(max-width: 640px) {
      text-align: center;
      margin-top: 40px;
    }
    li{
      list-style-type: none;
      line-height: 1;
      padding-left: 0;
      font-size: 19px;
      line-height: 1.58;
      color: white;
      display: inline-block;
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
