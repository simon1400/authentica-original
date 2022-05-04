import INavItem from "interfaces/navItem"
import Link from "next/link"
import { Dispatch, FC, SetStateAction } from "react"
import Nav from "./styled"
import DownIcon from '../../public/assets/angle-down.svg'

interface ITopNav {
  data: INavItem[],
  setDropShown: Dispatch<SetStateAction<number>>
}

const TopNav: FC<ITopNav> = ({
  data,
  setDropShown
}) => {

  if(!data.length) {
    return null
  }
  
  return (
    <Nav>
      <ul>
        {data.map((item, index) => <li key={index}>
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
        </li>)}
        {/* <li><a href="#">some title</a></li>
        <li 
          onMouseEnter={() => setDropShown(1)}
          className="drop-down-item"
        >
          <a href="#">some title<DownIcon /></a>
        </li>
        <li className="active">
          <a href="#">some title</a>
        </li>
        <li><a href="#">some title</a></li>
        <li><a href="#">some title</a></li>
        <li><a href="#">some title</a></li> */}
      </ul>
    </Nav>
  )
}

export default TopNav