import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const PageHead = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1170px 1fr;
  @media (max-width: 1440px) {
    grid-template-columns: 35% 1fr;
  }
  @media (max-width: 940px) {
    grid-auto-flow: dense;
    grid-template-columns: 1fr 40%;
    >div:last-of-type{
      grid-column-start: 1;
      grid-row-start: 1;
      padding-left: 15px;
    }
  }
  > div{
    position: relative;
    &:last-of-type{
      padding-top: 240px;
      padding-bottom: 153px;
    }
  }
  p{
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.7);
  }
  button{
    margin-top: 50px;
  }
`

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