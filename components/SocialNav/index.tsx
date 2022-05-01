import styled from "@emotion/styled"

import Facebook from 'public/assets/facebook-f.svg'
import Instagram from 'public/assets/instagram.svg'
import Linkedin from 'public/assets/linkedin-in.svg'
import { FC } from "react"

interface SocialNavProps {
  invert?: boolean;
  big?: boolean;
}

const SocialNav: FC<SocialNavProps> = ({
  invert = false,
  big = false
}) => {
  return (
    <Social invert={invert} big={big}>
      <ul>
        <li>
          <a href="#">
            <Facebook />
          </a>
        </li>
         <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="#">
            <Linkedin />
          </a>
        </li>
      </ul>
    </Social>
  )
}

const Social = styled.nav<SocialNavProps>(({theme, invert, big}) => `
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
        &:after{
          display: none;
        }
        svg{
          margin: auto;
          color: ${invert ? "black" : "white"};
          fill: ${invert ? "black" : "white"};
          height: ${big ? "20px" : "15px"};
        }
        &:hover{
          background-color: ${invert ? theme.palette.primary.main : "white"};
          border-color: ${invert ? theme.palette.primary.main : "white"};
          svg{
            fill: ${invert ? "white" : theme.palette.primary.main}
          } 
        }
      }
    }
  }
`)

export default SocialNav