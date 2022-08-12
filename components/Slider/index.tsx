import { FC, ReactChild } from "react";
import Slider from "react-slick";
import ChevronRight from 'public/assets/chevron-right.svg'
import ChevronLeft from 'public/assets/chevron-left.svg'
import { useMediaQuery } from "@mui/material";

interface ISectionSlider {
  children: ReactChild | ReactChild[];
  infinite?: boolean;
}

const SectionSlider: FC<ISectionSlider> = ({
  children,
  infinite = false
}) => {

  const mediaXs = useMediaQuery("(max-width: 640px)")

  const settingsInfinite = {
    infinite: true,
    className: "infiniteSlider",
    slidesToShow: 5,
    slidesToScroll: 10,
    centerMode: true,
    autoplay: true,
    // autoplaySpeed: 9000,
    speed: 9000,
    cssEase: "linear",
    responsive: [
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: false,
        }
      },
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
  const { className, style, onClick } = props;
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
  const { className, style, onClick } = props;
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


