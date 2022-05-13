import DropDownItem from "components/DropDownItem"
import INavItem from "interfaces/navItem"
import Link from "next/link"
import { FC, useState } from "react"
import DownIcon from '../../public/assets/angle-down.svg'
import { Nav } from "./styled"

interface IResponseNav {
  data: INavItem[];
  menu: boolean;
}

const ResponseNav: FC<IResponseNav> = ({
  data,
  menu
}) => {

  const [dropDown, setDropDown] = useState(-1)

  // @ts-ignore
  const handleDropDown = (e, idx) => {
    e.preventDefault()
    setDropDown(idx)
  }

  return (
    <Nav menu={menu}>
      <ul>
        {data.map((item, index) => <li key={index}>
          <Link href={item.url}>
            <a>
              {item.title}
              {/* @ts-ignore */}
              {!!item.subNav.length && <DownIcon onClick={(e) => handleDropDown(e, dropDown === index ? -1 : index)} />}
            </a>
          </Link>
          {!!item.subNav.length && <ul className={dropDown === index ? "open-drop" : ""}>
            {item.subNav.map((item, indexChild) => <li key={indexChild}>
              <DropDownItem data={item} />
            </li>)}
          </ul>}
        </li>)}
      </ul>
    </Nav>
  )
}

export default ResponseNav