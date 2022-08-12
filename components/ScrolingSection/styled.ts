import styled from "@emotion/styled";

export const ContainerScroll = styled.div<{height: string}>(({height}) => `
  height: ${height};
  width: 100%;
  overflow: hidden;
  padding-bottom: 100px;
  position: relative;
`)

export const Scroll = styled.div<{height: string}>(({height}) => `
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vw;
  width: ${height}; 
  transform-origin: right top;
  transform: rotate(-90deg) ${`translateY(-${height})`};
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`)

export const ContentScroll = styled.div<{column: number; left?: number, widthColumn: string, height: string}>(({column, height, widthColumn, left = 0}) => `
  transform: rotate(90deg) ${`translateY(-${height})`};
  transform-origin: left top;
  width: 100vw;
  height: ${height};
  display: grid;
  grid-template-columns: repeat(${column}, ${widthColumn});
  column-gap: 60px;
  padding-left: ${left}px;
  margin-right: ${left}px;
`)

export const ItemScroll = styled.div`
  width: 100%;
`