import { FC, ReactChild, useState } from "react";
import Slider from "react-slick";
import ChevronRight from 'public/assets/chevron-right.svg'
import ChevronLeft from 'public/assets/chevron-left.svg'
import { useMediaQuery } from "@mui/material";

interface ISectionSlider {
  children: ReactChild | ReactChild[];
  infinite?: boolean;
  count?: number;
}

const SectionSlider: FC<ISectionSlider> = ({
  children,
  infinite = false,
  count
}) => {

  const [active, setActive] = useState(0)

  const mediaXs = useMediaQuery("(max-width: 960px)")

  const settingsInfinite = {
    infinite: true,
    className: "infiniteSlider",
    slidesToShow: 5,
    slidesToScroll: 10,
    centerMode: true,
    autoplay: true,
    speed: 9000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
    ]
  };
  
  const settingsBase = {
    slidesToShow: 3,
    className: "baseSlider",
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow active={count !== undefined ? active !== (count - 2) : true} />,
    prevArrow: <PrevArrow active={active > 1} />,
    beforeChange: (current: number, next: number) => setActive(next),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  };

  const settings = infinite ? settingsInfinite : settingsBase

  return (
    <Slider {...settings}>
      {!infinite && !mediaXs && <div style={{width: "25vw"}}></div>}
      {children}
    </Slider>
  )
}

const NextArrow = (props: any) => {
  const { className, style, onClick, active } = props;

  if(!active) {
    return <></>
  }

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
        <ChevronRight />
    </div>
  );
}

const PrevArrow = (props: any) => {
  const { className, style, onClick, active } = props;

  if(!active) {
    return <></>
  }

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <ChevronLeft />
    </div>
  );
}

export default SectionSlider


