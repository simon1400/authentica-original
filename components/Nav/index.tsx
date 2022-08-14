import { Container } from "@mui/material"
import INavItem from "interfaces/navItem"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import { LeftMenu, NavItem, RightMenu, SNav, SNavWrap } from "./styled"

interface INav {
  data: INavItem[];
  menu: boolean;
  headNav: INavItem[];
  handleMenuOpen: (value: boolean) => void
}

const Nav: FC<INav> = ({
  data,
  menu,
  headNav,
  handleMenuOpen
}) => {

  const router = useRouter()

  const handleClick = (e: any, link: string) => {
    e.preventDefault()
    handleMenuOpen(false)
    router.push(link)
  }

  return (
    <SNavWrap menu={menu}>
      <Container>
        <SNav>
          <LeftMenu>
            {!!headNav?.length && headNav.map((item, idx) => <NavItem active={item.url === router.asPath} key={idx}>
              <a href={item.url} onClick={e => handleClick(e, item.url)}>{item.title}</a>
            </NavItem>)}
          </LeftMenu>
          <RightMenu>
            {!!data?.length && data.map((item, index) => <NavItem active={item.url === router.asPath} key={index}>
              <a href={item.url} onClick={e => handleClick(e, item.url)}>{item.title}</a>
            </NavItem>)}
          </RightMenu>
        </SNav>
      </Container>
    </SNavWrap>
  )
}

export default Nav