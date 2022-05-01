import styled from "@emotion/styled";


export const ContainerScroll = styled.div`
  height: 90vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const Scroll = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vw;
  width: 90vh; 
  transform-origin: right top;
  transform: rotate(-90deg) translateY(-90vh);
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ContentScroll = styled.div<{column: number; left?: number}>(({column, left = 0}) => `
  transform: rotate(90deg) translateY(-90vh);
  transform-origin: left top;
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(${column}, 560px);
  column-gap: 60px;
  padding-left: ${left}px;
  margin-right: ${left}px;
`)

export const ItemScroll = styled.div`
  width: 560px;
`