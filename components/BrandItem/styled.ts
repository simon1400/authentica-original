import styled from "@emotion/styled"

export const BrandItem = styled.div<{index: number}>(({theme, index}) => `
  background-color: #707070;
  width: 100%;
  position: relative;
  padding-top: 100%;
  ${!!(index % 2) && `margin-top: ${theme.spacing(12)}`};
`)

export const LogoWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`

export const Logo = styled.img`
  margin: auto;
  max-width: 210px;
  width: 100%;
`