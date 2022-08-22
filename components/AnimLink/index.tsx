import Link from "next/link"
import { FC, useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
// import lottie from "lottie-web";
import { Head } from "./styles";
import animationData from 'public/assets/lottie-link.json';

interface IAnimLink {
  item: any;
}

const AnimLink: FC<IAnimLink> = ({item}) => {

  const [direction, setDirection] = useState(1)
  const [pause, setPause] = useState(true)

  const options = {
    loop: false,
    autoplay: false,
    animationData: animationData
  }

  const hoverOn = async () => {
    setDirection(1)
    setPause(false)
  }
  
  const hoverOut = async () => {
    setPause(true)
    setDirection(-1)
    setPause(false)
  }

  return (
    <div onMouseEnter={() => hoverOn()} onMouseLeave={() => hoverOut()}>
      <Link href={"/"+item.article.data?.attributes?.slug} passHref>
        <Head variant='h1'>
          <span>{item.Text}</span>
          <Lottie 
            options={options}
            direction={direction}
            isPaused={pause}
            width={1000}
          />
        </Head>
      </Link>
      
    </div>
  )
}

export default AnimLink