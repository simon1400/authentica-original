import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Container, useMediaQuery } from "@mui/material"
import DropDown from "components/DropDown";
import Hamburger from "components/Hamburger";
import ResponseNav from "components/ResponseNav";
import INavItem from "interfaces/navItem";
import Link from "next/link";
import topNavQuery from "queries/topNav";
import { FC, useEffect, useState } from "react";
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

  const media = useMediaQuery("(max-width:1200px)")

  const { loading, error, data } = useQuery(topNavQuery);
  const [menu, setMenu] = useState(false);
  const [dropShown, setDropShown] = useState<number>(-1)

  useEffect(() => {
    if(menu) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    }else{
      document.body.style.overflow = '';
      document.body.style.position = '';
    }
  }, [menu])

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
          {!media && <Navigation data={nav} setDropShown={setDropShown} />}
          {media && <Hamburger open={menu} setOpen={setMenu} />}
          {media && <ResponseNav menu={menu} data={nav} />}
        </TopNav>
      </Container>
      {!media && nav.map((item, index) => {
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
  position: 'absolute';
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1002;
  background: ${backgroundAbsolute ? backgroundAbsolute : "#ffffff"};
  * {
    color: ${checkColor(backgroundAbsolute) ? "white" : "black"}!important;
    fill: ${checkColor(backgroundAbsolute) ? "white" : "black"}!important;
  }
  &:after {
    position: fixed;
    content: '';
    display: block;
    width: 100vw;
    height: 100vh;
    transition: background .5s ease;
    top: ${dropShown >= 0 ? 0 : "-1000%"};
    left: 0;
    z-index: 10;
    background: ${dropShown >= 0 ? "rgba(0,0,0, .7)" : "transparent"};
  }
`)

export default Header