import styled from '@emotion/styled'

const Logo = styled.a<{menu: boolean}>`
  height: 42px;
  display: block;
  position: relative;
  z-index: 105;
  img, svg{
    height: 100%;
    path{
      transition: all .2s ease;
      fill: ${({menu}) => menu ? "white" : "black"}!important;
    }
  }
`

export default Logo