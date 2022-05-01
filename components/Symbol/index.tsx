import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Symbol = () => {

  return (
    <SymbolC>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 922.48 1079.999" style={{position: "absolute"}}>
        <defs>
          <clipPath id="mask">
            <path d="M686.154,606.9,310.5,1686.9H504.586l73.566-223.828h389.74l73.568,223.828h192.524L858.328,606.9ZM628.243,1306.55l144-436.7,144,436.7Z" transform="translate(-310.502 -606.902)"/>
          </clipPath>
        </defs>
        <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a"/>

        <foreignObject clipPath="url(#mask)">
          <video width="auto" height="100%" autoPlay muted loop>
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
          <div></div>
        </foreignObject>
      </svg>
    </SymbolC>
  )
}

export const SymbolC = styled.div(({theme}) => `
  height: calc(100% + 118px);
  width: 100%;
  left: -100%;
  bottom: 0;
  position: absolute;
  display: block;
  text-align: right;
  svg, foreignObject{
    fill: ${theme.palette.primary.main};
    color: ${theme.palette.primary.main}; 
    max-height: 100%;
    max-width: 100%;
    right: 0;
  }
  foreignObject{
    width: 100%;
    height: 100%;
    position: relative;
    div{
      background: ${theme.palette.primary.main};
      mix-blend-mode: multiply;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
    }
    video{
      position: absolute;
      right: 0;
    }
  }
`)

export default Symbol