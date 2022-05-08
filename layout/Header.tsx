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
      <DropDown shown={dropShown} setDropShown={setDropShown} />
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
    display: ${dropShown >= 0 ? 'block' : 'none'};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0,0,0, .7);
  }
`)

export default Header