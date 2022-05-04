import { useLazyQuery, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Container } from "@mui/material"
import axios from "axios";
import DropDown from "components/DropDown";
import INavItem from "interfaces/navItem";
import Link from "next/link";
import topNavQuery from "queries/topNav";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import Logo from "styles/Logo";
import TopNav from "styles/TopNav";
import Navigation from "../components/TopNav"


interface HeaderProps {
  absoluteHeader?: boolean
}

const Header: FC<HeaderProps> = ({
  absoluteHeader = false
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
    <HeaderC absoluteHeader={absoluteHeader} dropShown={dropShown}>
      <Container maxWidth="xl">
        <TopNav>
          <Link href="/" passHref>
            <Logo>
              <img src="/assets/logo.png" alt="" />
            </Logo>
          </Link>
          <Navigation data={nav} setDropShown={setDropShown} />
        </TopNav>
      </Container>
      <DropDown shown={dropShown} setDropShown={setDropShown} />
    </HeaderC>
  )
}

const HeaderC = styled.header<{absoluteHeader: boolean; dropShown: number}>(({absoluteHeader, dropShown}) => `
  position: ${absoluteHeader ? 'absolute' : 'static'};
  top: 0;
  left: 0;
  width: 100%;
  background: white;
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