import styled from "@emotion/styled"
import { darken, Typography } from '@mui/material';


interface AnchorProps {
  small?: boolean;
  bg: string;
}

export const ReferenceItemComponent = styled.a<AnchorProps>(({small, bg}) => `
  height: ${small ? '442px' : '900px'};
  background-color: ${bg};
  padding: ${small ? '40px 50px' : '60px'};
  position: relative;
  display: block;
  text-decoration: none;
  transition: all .5s ease;
  text-align: ${small ? 'center' : 'left'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: visible;
  &:hover{
    background-color: ${darken(bg, .1)};
    > img {
      transform: rotate(8deg) scale(1.1);
    }
  }
  @media(max-width: 1200px) {
    height: ${small ? '310px' : '600px'};
    margin: ${small ? '10px 0px' : '0 20px'};
    padding: ${small ? '30px 40px' : '30px'};
  }
  @media(max-width: 640px) {
    height: ${small ? '310px' : '540px'};
  }
`)

export const ReferenceHead = styled(Typography)<{inverse?: boolean}>(({inverse = false}) => `
  font-size: 24px;
  font-weight: bold;
  line-height: 1.3;
  color: ${inverse ? "white" : "black"};
  @media(max-width: 1920px) {
    font-size: 1.5vw;
  }
  @media(max-width: 1440px) {
    font-size: 2vw;
  }
  @media(max-width: 960px) {
    font-size: 3vw;
  }
  @media(max-width: 640px) {
    font-size: 20px;
  }
`)

export const Image = styled.img<{small: boolean}>(({small}) => `
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 100;
  margin-bottom: ${small ? '-90px' : "-160px"};
  max-height: 100%;
  transition: all .5s ease;
  @media(max-width: 640px) {
    margin-bottom: ${small ? '-90px' : "-100px"};
  }
`)

export const LogoReference = styled.div<{inverse?: boolean}>(({inverse = false}) => `
  width: 50%;
  height: 80px;
  svg, img{
    margin-bottom: 50px;
    object-fit: contain;
    width: 100%;
    height: 100%;
    object-position: left center;
    fill: ${inverse ? "white" : "black"};
    color: ${inverse ? "white" : "black"};
  }
`)