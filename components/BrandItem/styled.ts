import styled from "@emotion/styled"

export const BrandItem = styled.a<{index: number, image: string}>(({theme, index, image}) => `
  width: 100%;
  display: block;
  position: relative;
  background-image: ${"url('http://localhost:1340"+image+"')"};
  background-size: cover;
  padding-top: 100%;
  ${!!(index % 2) && `margin-top: ${theme.spacing(12)}`};
  &:hover ${LogoWrap} {
    opacity: .1;
  }
`)

export const LogoWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EDEDED;
  transition: all .5s ease;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  &:hover {
    opacity: .1;
  }
`

export const Logo = styled.img`
  margin: auto;
  max-width: 210px;
  width: 100%;
`