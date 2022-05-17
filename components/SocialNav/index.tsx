import { useRouter } from "next/router"

import Facebook from 'public/assets/facebook-f.svg'
import Instagram from 'public/assets/instagram.svg'
import Linkedin from 'public/assets/linkedin-in.svg'
import Twitter from 'public/assets/twitter.svg'
import { FC } from "react"
import { Social } from "./styled"

const DOMAIN = process.env.APP_DOMAIN

export interface IShare {
  title: string;
}

export interface SocialNavProps {
  invert?: boolean;
  big?: boolean;
  social?: boolean;
  share?: IShare
}

const SocialNav: FC<SocialNavProps> = ({
  invert = false,
  big = false,
  social = false,
  share = {}
}) => {

  const router = useRouter()

  return (
    <Social invert={invert} big={big}>
      {share && <ul>
        <li>
          <a href={`https://www.facebook.com/sharer.php?u=${DOMAIN}${router.asPath}`} rel="noreferrer" target="_blank">
            <Facebook />
          </a>
        </li>
         <li>
          <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${DOMAIN}${router.asPath}&title=${share.title}&source=${DOMAIN}`}>
            <Linkedin />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/share?url=${DOMAIN}${router.asPath}&amp;text=${share.title}`} rel="noreferrer" target="_blank">
            <Twitter />
          </a>
        </li>
      </ul>}
      {social && <ul>
        <li>
          <a href="/asd">
            <Facebook />
          </a>
        </li>
         <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="/asd">
            <Linkedin />
          </a>
        </li>
      </ul>}
    </Social>
  )
}

export default SocialNav