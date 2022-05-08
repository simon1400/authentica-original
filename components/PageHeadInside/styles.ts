import styled from "@emotion/styled"

export const Top = styled.div<{background: string; invert: boolean}>(({background, invert}) => `
  background-color: ${background};
  padding-top: 355px;
  padding-bottom: 60px;
  * {
    color: ${invert ? 'white' : "black"}!important;
  }
  p{
    margin-bottom: 30px;
  }
`)

export const Bottom = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
`
export const WrapPageImg = styled.div`
  position: relative;
  height: calc(100% + 60px);
  img{
    position: absolute;
    width: 100%;
    height: auto;
    max-width: 100%;
    left: 0;
    bottom: -60px;
  }
`