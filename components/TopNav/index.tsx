import INavItem from "interfaces/navItem"
// import Link from "next/link"
import { FC } from "react"
import Nav from "./styled"
import DownIcon from '../../public/assets/angle-down.svg'

// interface ITopNav {
//   data: INavItem[]
// }

const TopNav: FC<{setDropShown: any}> = ({
  // data
  setDropShown
}) => {
  
  return (
    <Nav>
      <ul>
        {/* {data.map((item, index) => <li key={index}>
          <Link href={item.slug}>
            <a>{item.title}</a>
          </Link>
        </li>)} */}
        <li><a href="/">some title</a></li>
        <li 
          onMouseEnter={() => setDropShown(1)}
          className="drop-down-item"
        >
          <a href="/">some title<DownIcon /></a>
        </li>
        <li className="active">
          <a href="/">some title</a>
        </li>
        <li><a href="/">some title</a></li>
        <li><a href="/">some title</a></li>
        <li><a href="/">some title</a></li>
      </ul>
    </Nav>
  )
}

export default TopNav