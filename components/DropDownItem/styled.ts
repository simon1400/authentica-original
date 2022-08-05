import styled from "@emotion/styled";

export const DropDownItemC = styled.div(({theme}) => `
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  justify-content: center;
  h5{
    a{
      color: ${theme.palette.primary.main}!important;
      text-decoration: none;
      position: relative;
      &:after{
        content: '';
        display: block;
        width: 0;
        transition: all .2s ease;
        height: 1.5px;
        background-color: ${theme.palette.primary.main};
        position: absolute;
        bottom: 0;
        left: 0;
      }
      &:hover{
        &:after{
          width: 100%;
        }
      }
    }
    margin-bottom: 10px;
  }
  div{
    &:first-of-type{
      margin-right: 10px;
    }
    /* &:last-child{
      flex-grow: 1;
    } */
  }
  div ul{
    padding-left: 0;
    margin: 0;
    li{
      padding-left: 0;
      list-style-type: none;
      display: block;
      line-height: 0;
      margin-bottom: 7px;
      a{
        font-size: 17px;
        opacity: .7;
        line-height: 1;
        text-transform: none;
        color: black;
        display: inline-block;
        text-decoration: none;
        font-weight: 300;
        position: relative;
        transition: all .3s ease;
        /* &:after{
          content: '';
          display: block;
          width: 0;
          transition: all .2s ease;
          height: 1px;
          background-color: ${theme.palette.primary.main};
          position: absolute;
          bottom: -2px;
          left: 0;
        } */
        &:hover{
          opacity: 1;
          /* &:after{
            width: 100%;
          } */
        }
      }
    }
  }
  img{
    max-height: 100px;
    height: 100px;
  }
`)