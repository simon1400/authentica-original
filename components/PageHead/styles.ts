import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const PageHead = styled.div<{homepage: boolean}>(({homepage}) => `
  position: relative;
  padding-top: ${homepage ? "250px" : "300px"};
  padding-bottom: 60px;
  min-height: ${homepage ? "100vh" : "50vh"};
  max-width: 60vw;
  @media (max-width: 1440px) {
    padding-top: ${homepage ? "100px" : "200px"};
    padding-bottom: ${homepage ? "60px" : "150px"};
  }
  @media (max-width: 640px) {
    padding-top: ${homepage ? "100px" : "200px"};
    padding-bottom: ${homepage ? "60px" : "150px"};
    max-width: 95vw;
  }
  p {
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.7);
  }
  /* button { */
    /* margin-top: 50px; */
    /* @media (max-width: 720px) and (min-width: 640px) {
      margin-top: 0px;
    } */
  /* } */
`)

export const Head = styled(Typography)(({theme}) => `
  position: relative;
  display: inline-block;
  cursor: pointer;
  z-index: 99;
  font-size: 84px!important;
  &:hover{
    color: ${theme.palette.primary.main};
    &:after{
      width: 60vw;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    position: absolute;
    transition: all 3s ease;
    height: 60px;
    background: url('/assets/head-lines.svg');
    transform: skewX(-20deg);
    top: 20px;
    left: 102%;
    background-repeat: repeat-x;
    background-size: auto 100%;
  }
`)

export const HeadAnchore = styled.a(({theme}) => `
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover{
    color: ${theme.palette.primary.main};
    &:after{
      width: 60vw;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    position: absolute;
    transition: all 3s ease;
    height: 60px;
    background: url('/assets/head-lines.svg');
    top: 20px;
    left: 102%;
    background-repeat: repeat-x;
    background-size: auto 100%;
  }
`)