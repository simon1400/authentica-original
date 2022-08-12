import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Container, useMediaQuery } from "@mui/material"
import Hamburger from "components/Hamburger";
import Lang from "components/Lang";
import Nav from "components/Nav";
import INavItem from "interfaces/navItem";
import Link from "next/link";
import { useRouter } from "next/router";
import topNavQuery from "queries/topNav";
import { FC, useEffect, useState } from "react";
import { Grow } from "styles/Grow";
import Logo from "styles/Logo";
import TopNav from "styles/TopNav";
import { checkColor } from "utility/checkColor";
import LogoIcon from '../public/assets/logo.svg'

interface HeaderProps {
  backgroundAbsolute?: string;
}

const Header: FC<HeaderProps> = ({
  backgroundAbsolute = "#ffffff"
}) => {

  const media = useMediaQuery("(max-width:1200px)")
  const route = useRouter()

  const { loading, error, data } = useQuery(topNavQuery, {
    variables: {
      locale: route.locale
    }
  });

  const [menu, setMenu] = useState(false)

  const handleMenuOpen = (value: boolean) => {
    setMenu(value)
  }
  
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

  let topNav = data.navigation.data?.attributes?.topNav
  let headNav = data.navigation.data?.attributes?.headNav

  const nav: INavItem[] = topNav

  return (
    <HeaderC backgroundAbsolute={backgroundAbsolute} dropShown={dropShown}>
      <Container maxWidth="xl">
        <TopNav>
          <div onClick={e => handleMenuOpen(false)}>
            <Link href="/" passHref >
              <Logo menu={menu}>
                <LogoIcon />
              </Logo>
            </Link>
          </div>
          <Grow />
          <Lang menu={menu} />
          <Hamburger open={menu} setOpen={handleMenuOpen} />
          <Nav menu={menu} data={nav} headNav={headNav} handleMenuOpen={handleMenuOpen} />
        </TopNav>
      </Container>
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