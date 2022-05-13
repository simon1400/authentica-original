import styled from '@emotion/styled'

const TopNav = styled.div(({theme}) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 70px;
  position: relative;
  @media(max-width:1200px) {
    padding-top: 50px;
  }
`)

export default TopNav