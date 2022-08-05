import { FC } from "react"

import dynamic from "next/dynamic"

const Icons: FC<{icon: string}> = ({icon}) => {

  let IconImport: any = ''

  switch(icon) {
    case('facebook'): {
      IconImport = dynamic(() => import('public/assets/facebook-f.svg'), {loading: () => <></>})
      break;
    };
    case('instagram'): {
      IconImport = dynamic(() => import('public/assets/instagram.svg'), {loading: () => <></>})
      break;
    };
    case('linkedin'): {
      IconImport = dynamic(() => import('public/assets/linkedin-in.svg'), {loading: () => <></>})
      break;
    };
    case('twitter'): {
      IconImport = dynamic(() => import('public/assets/twitter.svg'), {loading: () => <></>})
      break;
    };
    case('envelope'): {
      IconImport = dynamic(() => import('public/assets/envelope.svg'), {loading: () => <></>})
      break;
    };
    case('phone'): {
      IconImport = dynamic(() => import('public/assets/phone-alt.svg'), {loading: () => <></>})
      break;
    };
    default: return null
  }

  return <IconImport />
  
}

export default Icons