import styled from "@emotion/styled";

export const Symbol = styled.div<{homepage: boolean}>(({theme, homepage}) => `
  width: 100%;
  position: absolute;
  right: -550px;
  top: 50px;
  height: ${homepage ? "calc(100vh - 48px)" : "60vh"};
  z-index: 10;
  display: inline-block;
  transition: all .5s cubic-bezier(0.7, -0.01, 0.19, 1);
  svg, foreignObject{
    fill: ${theme.palette.primary.main};
    color: ${theme.palette.primary.main}; 
    max-height: ${homepage ? "calc(100vh - 150px)" :"70vh"};
    right: 0;
    transition: all .5s cubic-bezier(0.7, -0.01, 0.19, 1);
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