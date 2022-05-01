import styled from '@emotion/styled'

const ContentWrap = styled.div(({theme}) => `
  a{
    color: inherit;
    position: relative;
    color: ${theme.palette.primary.main};
    text-decoration: none;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${theme.palette.primary.main};
    }
  }
  ul{
    padding-left: 0;
    li{
      list-style-type: none;
      padding-left: 30px;
      position: relative;
      &:before{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 15px;
        height: 2px;
        background-color: ${theme.palette.primary.main};
      }
    }
  }
`)

export default ContentWrap