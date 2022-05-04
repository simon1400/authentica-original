import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const PageHead = styled.div`
  padding-top: 240px;
  padding-bottom: 153px;
  position: relative;
  > p{
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.7);
  }
  button{
    margin-top: 50px;
  }
`

export const Symbol = styled.div(({theme}) => `
  height: calc(100% + 118px);
  width: 100%;
  left: -100%;
  bottom: 0;
  position: absolute;
  display: block;
  text-align: right;
  svg{
    /* fill: ${theme.palette.primary.main}; */
    max-height: 100%;
    max-width: 100%;
  }
`)

export const Head = styled(Typography)(({theme}) => `
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