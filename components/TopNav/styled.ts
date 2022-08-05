import styled from '@emotion/styled'
import { DropDownC } from 'components/DropDown'

const Nav = styled.nav(({theme}) => `
  ul{
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    li{
      display: inline-block;
      list-style-type: none;
      line-height: 1;
      &:not(:last-of-type) {
        padding-right: 25px;
      }
      &:not(:first-of-type) {
        padding-left: 25px;
      }
      &.active{
        a{
          &:after{
            display: block;
            content: '';
            position: absolute;
            width: 100%;
            height: 1.5px;
            background: ${theme.palette.primary.main}!important;
            left: 0;
            bottom: -4px;
          }
        }
      }
      &.drop-down-item{
        a svg{
          transition: all .2s ease;
          path{
            fill: ${theme.palette.primary.main}!important;
            color: ${theme.palette.primary.main}!important;
          }
        } 
        &:hover{
          a svg{
            transform: rotate(-180deg);
          }
          ${DropDownC}{
            display: block;
          }
        } 
      }
      a{
        line-height: 1.29;
        letter-spacing: 2.24px;
        font-size: 14px;
        display: inline-block;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        position: relative;
        z-index: 100;
        transition: all .5s ease;
        &:hover{
          color: ${theme.palette.primary.main}!important;
        }
        svg{
          fill: ${theme.palette.primary.main};
          width: 10px;
          height: 16px;
          display: inline-block;
          position: relative;
          top: 3px;
          left: 7px;
        }
      }
    }
  }
`)

export default Nav