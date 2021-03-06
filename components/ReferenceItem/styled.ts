import styled from "@emotion/styled"
import { darken, Typography } from '@mui/material';


interface AnchorProps {
  small?: boolean;
  bg: string;
}

export const ReferenceItemComponent = styled.a<AnchorProps>(({small, bg}) => `
  height: ${small ? '442px' : '80vh'};
  background-color: ${bg};
  padding: ${small ? '40px 50px' : '60px'};
  position: relative;
  display: block;
  text-decoration: none;
  transition: all .5s ease;
  text-align: ${small ? 'center' : 'left'};
  &:hover{
    background-color: ${darken(bg, .1)};
    > img {
      transform: translateX(-50%) rotate(8deg) scale(1.1);
    }
  }
`)

export const ReferenceHead = styled(Typography)<{inverse?: boolean}>(({inverse = false}) => `
  font-size: 27px;
  font-weight: bold;
  line-height: 1.3;
  color: ${inverse ? "white" : "black"};
`)

export const Image = styled.img<{small: boolean}>(({small}) => `
  position: absolute;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-height: 50vh;
  bottom: ${small ? '-50px' : "-100px"};
  left: 50%;
  transform: translateX(-50%);
  transition: all .5s ease;
`)

export const LogoReference = styled.div<{inverse?: boolean}>(({inverse = false}) => `
  svg, img{
    margin-bottom: 50px;
    width: 210px;
    fill: ${inverse ? "white" : "black"};
    color: ${inverse ? "white" : "black"};
  }
`)