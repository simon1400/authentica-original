import Link from "next/link"
import { FC, useState } from "react";
import Lottie from "react-lottie";
import { Head } from "./styles";
import animationData from 'public/assets/lottie-link.json';
import { useMediaQuery } from "@mui/material";
import { animated, useSpring } from 'react-spring'

interface IAnimLink {
  item: any;
  idx: number
}

const AnimLink: FC<IAnimLink> = ({item, idx}) => {

  const [direction, setDirection] = useState(1)
  const [pause, setPause] = useState(true)

  const mediaXs = useMediaQuery("(max-width: 640px)")

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

  const props = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(10px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    },
    delay: 1000+idx*500,
    config: { duration: 500 },
  })

  return (
    <animated.div style={props} onMouseEnter={() => hoverOn()} onMouseLeave={() => hoverOut()}>
      <Link style={{color: "black", textDecoration: "none"}}href={"/"+item.article.data?.attributes?.slug} passHref>
        <Head variant='h1'>
          <span>{item.Text}</span>
          {!mediaXs && <Lottie 
            options={options}
            direction={direction}
            isPaused={pause}
            width={1000}
          />}
        </Head>
      </Link>
    </animated.div>
  )
}

export default AnimLink