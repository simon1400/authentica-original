import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Container } from "@mui/material"
import DropDown from "components/DropDown";
import INavItem from "interfaces/navItem";
import Link from "next/link";
import topNavQuery from "queries/topNav";
import { FC, useState } from "react";
import Logo from "styles/Logo";
import TopNav from "styles/TopNav";
import { checkColor } from "utility/checkColor";
import Navigation from "../components/TopNav"
import LogoIcon from '../public/assets/logo.svg'

interface HeaderProps {
  backgroundAbsolute?: string;
}

const Header: FC<HeaderProps> = ({
  backgroundAbsolute = "#ffffff"
}) => {

  const { loading, error, data } = useQuery(topNavQuery);
  
  const [dropShown, setDropShown] = useState<number>(-1)

  if(loading) {
    return null
  }

  if(error) {
    console.log("Erorr with header nav -", error);
  }

  let topNav = data.navigation.data.attributes.topNav

  const nav: INavItem[] = topNav

  return (
    <HeaderC backgroundAbsolute={backgroundAbsolute} dropShown={dropShown}>
      <Container maxWidth="xl">
        <TopNav>
          <Link href="/" passHref>
            <Logo>
              <LogoIcon />
            </Logo>
          </Link>
          <Navigation data={nav} setDropShown={setDropShown} />
        </TopNav>
      </Container>
      {nav.map((item, index) => {
        if(item.subNav.length) {
          return <DropDown 
            key={index} 
            idx={index} 
            data={item.subNav} 
            shown={dropShown} 
            setDropShown={setDropShown} 
          />
        }
        return null
      })}
      
    </HeaderC>
  )
}

const HeaderC = styled.header<{backgroundAbsolute: string; dropShown: number}>(({backgroundAbsolute, dropShown}) => `
  position: ${backgroundAbsolute ? 'absolute' : 'static'};
  top: 0;
  left: 0;
  width: 100%;
  background: ${backgroundAbsolute ? backgroundAbsolute : "#ffffff"};
  * {
    color: ${checkColor(backgroundAbsolute) ? "white" : "black"}!important;
    fill: ${checkColor(backgroundAbsolute) ? "white" : "black"}!important;
  }
  &:after{
    position: fixed;
    content: '';
    display: block;
    width: 100vw;
    height: 100vh;
    transition: background .5s ease;
    top: ${dropShown >= 0 ? 0 : "-1000%"};
    left: 0;
    z-index: 1;
    background: ${dropShown >= 0 ? "rgba(0,0,0, .7)" : "transparent"};
  }
`)

export default Header