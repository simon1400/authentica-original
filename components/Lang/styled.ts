import styled from '@emotion/styled'

const Nav = styled.div(({theme}) => `
  font-size: 14px;
  margin-right: 65px;
  position: relative;
  z-index: 105;
  ul{
    margin: 0;
    padding: 0;
    li{
      display: inline-block;
      list-style-type: none;
      line-height: 1;
      &:not(:last-of-type) {
        padding-right: 11px;
      }
      &:not(:first-of-type) {
        padding-left: 11px;
      }
      &.active{
        a{
          opacity: 1;
        }
      }
      a{
        line-height: 1.29;
        letter-spacing: 2.24px;
        display: block;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        position: relative;
        z-index: 100;
        transition: all .2s ease;
        opacity: .4;
        &:hover{
          color: ${theme.palette.primary.main}!important;
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: 640px) {
    margin-right: 15px;
    ul{
      li{
        &:not(:last-of-type) {
          padding-right: 5px;
        }
        &:not(:first-of-type) {
          padding-left: 5px;
        }
      }
    }
  }
`)

export default Nav