import styled from '@emotion/styled'

const Logo = styled.a`
  height: 42px;
  display: flex;
  position: relative;
  z-index: 105;
  align-items: center;
  svg{
    height: 100%;
    transition: all .2s ease;
  }
  @media (max-width: 640px) {
    svg{
      height: 31px;
      width: 141px;
    }
  }
`

export default Logo