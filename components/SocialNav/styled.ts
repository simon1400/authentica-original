import styled from "@emotion/styled";
import { SocialNavProps } from ".";

export const Social = styled.nav<SocialNavProps>(({theme, invert, big}) => `
  text-align: right;
  ul{
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    li{
      list-style-type: none;
      display: inline-block;
      &:not(:last-child) {
        margin-right: ${big ? "9px" : "7px"};
      }
      a{
        border: solid 1.5px ${theme.palette.primary.main}${invert ? "" : "50"};
        display: flex;
        border-radius: 50%;
        width: ${big ? "50px" : "40px"};
        height: ${big ? "50px" : "40px"};
        transition: all .3s ease;
        transform: scale(1);
        &:after{
          display: none;
        }
        svg{
          margin: auto;
          color: ${invert ? "black" : "white"};
          fill: ${invert ? "black" : "white"};
          height: ${big ? "20px" : "15px"};
          transition: all .3s ease;
          transform: scale(1);
        }
        &:hover{
          border-color: ${theme.palette.primary.main};
          transform: scale(1.1);
          svg{
            transform: scale(.9);
          } 
        }
      }
    }
  }
`)