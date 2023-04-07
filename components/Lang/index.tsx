import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import Nav from "./styled"

const lang = [
  {label: "cs", value: 'cs'},
  {label: "en", value: 'en'},
  {label: "de", value: 'de'},
]

const Lang: FC<{localization: any[]}> = ({localization}) => {

  const router = useRouter()  
  
  return (
    <Nav>
      <ul>
        {lang.map((item, idx) => <li key={idx} className={router.locale === item.value ? 'active' : undefined}>
          <Link href={localization.findIndex(itemLocale => itemLocale.locale === item.value) >= 0 ? router.asPath : "/"} locale={item.value}>
            {item.label}
          </Link>
        </li>)}
      </ul>
    </Nav>
  )
}

export default Lang