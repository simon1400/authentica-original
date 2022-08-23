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
    <HeaderC backgroundAbsolute={backgroundAbsolute} menu={menu}>
      <Container maxWidth="xl">
        <TopNav>
          <div onClick={e => handleMenuOpen(false)}>
            <Link href="/" passHref>
              <Logo>
                <LogoIcon />
              </Logo>
            </Link>
          </div>
          <Grow />
          <Lang />
          <Hamburger open={menu} background={backgroundAbsolute} setOpen={handleMenuOpen} />
          <Nav menu={menu} data={nav} headNav={headNav} handleMenuOpen={handleMenuOpen} />
        </TopNav>
      </Container>
    </HeaderC>
  )
}

const HeaderC = styled.header<{backgroundAbsolute: string; menu: boolean}>(({backgroundAbsolute, menu}) => `
  position: 'absolute';
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1002;
  margin-bottom: -1px;
  background: ${backgroundAbsolute ? backgroundAbsolute : "#ffffff"};
  * {
    color: ${checkColor(backgroundAbsolute) || menu ? "white" : "black"}!important;
    fill: ${checkColor(backgroundAbsolute) || menu ? "white" : "black"}!important;
  }
`)

export default Header