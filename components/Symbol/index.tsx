import styled from "@emotion/styled";
import { FC } from "react";

interface ISymbol {
  type: string;
}

const Symbol: FC<ISymbol> = ({
  type
}) => {

  return (
    <SymbolC homepage={type === "Homepage" ? true : false}>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 925 1080" style={{position: "absolute"}}>
        <defs>
          <clipPath id="mask">
            <path id="b" d="M376.41,0L.76,1080H194.84l73.57-223.83h389.74l73.57,223.83h192.52L548.59,0h-172.17Zm-57.91,699.65l144-436.7,144,436.7H318.5Z"/>
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

export const SymbolC = styled.div<{homepage: boolean}>(({theme, homepage}) => `
  height: ${homepage ? "100vh" :"70vh"};
  width: 100vh;
  position: absolute;
  z-index: 100;
  right: -10vw;
  z-index: 10;
  display: inline-block;
  transition: all .5s cubic-bezier(0.7, -0.01, 0.19, 1);
  @media (max-width: 1440px) {
    right: -12vw;
    top: 150px;
    height: ${homepage ? "calc(100vh - 150px)" : "70vh"};
  }
  @media (max-width: 960px) {
    right: -50vw;
    top: 100px;
    height: ${homepage ? "calc(100vh - 100px)" : "70vh"};
  }
  svg, foreignObject{
    fill: ${theme.palette.primary.main};
    color: ${theme.palette.primary.main}; 
    max-height: ${homepage ? "100vh" :"70vh"};
    right: 0;
    transition: all .5s cubic-bezier(0.7, -0.01, 0.19, 1);
    @media (max-width: 1440px) {
      height: ${homepage ? "calc(100vh - 150px)" : "70vh"};
    }
    @media (max-width: 960px) {
      height: ${homepage ? "calc(100vh - 100px)" : "70vh"};
    }
  }
  foreignObject{
    width: 100%;
    height: 100%;
    position: relative;
    div{
      background: ${theme.palette.primary.main};
      mix-blend-mode: multiply;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      position: absolute;
      right: 0;
    }
    video{
      position: absolute;
      left: 1px;
      bottom: 1px;
    }
  }
`)

export default Symbol