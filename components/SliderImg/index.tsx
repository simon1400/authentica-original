import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Container,
} from "@mui/material";
import { SliderWrap } from "./styled";
import { FC } from "react";
import ImageSquare from "styles/ImageSquare";
import Image from "components/Image";

interface ISliderImg {
  images: any[];
}

const SliderImg: FC<ISliderImg> = ({ images }) => {

  return (
    <SliderWrap>
      <Container maxWidth="xl">
        <Swiper
          style={{
            overflow: "visible",
          }}
          spaceBetween={20}
          slidesPerView={1.5}
        >
          {images.map((item, idx) => (
            <SwiperSlide style={{height: 'auto'}} key={idx}>
              <ImageSquare>
                <Image image={item} format="&resize=440x440" alt="" />
              </ImageSquare>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SliderWrap>
  );
};

export default SliderImg;
