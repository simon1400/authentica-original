import Icons from "components/Icons"
import { useRouter } from "next/router"

import { FC } from "react"
import { Social } from "./styled"

const DOMAIN = process.env.APP_DOMAIN

export interface IShare {
  title: string;
}

export interface ISocial {
  url: string;
  icon: string;
}

 export interface SocialNavProps {
  invert?: boolean;
  big?: boolean;
  social?: ISocial[];
  share?: IShare
}

const SocialNav: FC<SocialNavProps> = ({
  invert = false,
  big = false,
  social = [],
  share
}) => {

  const router = useRouter()

  return (
    <Social invert={invert} big={big}>
      {share?.title && <ul>
        <li>
          <a href={`https://www.facebook.com/sharer.php?u=${DOMAIN}${router.asPath}`} rel="noreferrer" target="_blank">
            <Icons icon="facebook" />
          </a>
        </li>
         <li>
          <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${DOMAIN}${router.asPath}&title=${share?.title}&source=${DOMAIN}`}>
            <Icons icon="linkedin" />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/share?url=${DOMAIN}${router.asPath}&amp;text=${share?.title}`} rel="noreferrer" target="_blank">
            <Icons icon="twitter" />
          </a>
        </li>
      </ul>}
      {!!social.length && <ul>
        {social.map((item: ISocial, idx) => <li key={idx}>
          <a href={item.url}>
            <Icons icon={item.icon} />
          </a>
        </li>)}
      </ul>}
    </Social>
  )
}

export default SocialNav