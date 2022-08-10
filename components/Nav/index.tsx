import { Container } from "@mui/material"
import INavItem from "interfaces/navItem"
import Link from "next/link"
import { FC } from "react"
import { LeftMenu, RightMenu, SNav, SNavWrap } from "./styled"

interface INav {
  data: INavItem[];
  menu: boolean;
  headNav: INavItem[]
}

const Nav: FC<INav> = ({
  data,
  menu,
  headNav
}) => {

  console.log(headNav);
  

  return (
    <SNavWrap menu={menu}>
      <Container>
        <SNav>
          <LeftMenu>
            {headNav.map((item, idx) => <li key={idx}>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </li>)}
          </LeftMenu>
          <RightMenu>
            {data.map((item, index) => <li key={index}>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </li>)}
          </RightMenu>
        </SNav>
      </Container>
    </SNavWrap>
  )
}

export default Nav