import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

const BannerEl = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  .swiper_wrap {
    height: 90vh;
    display: flex;
    align-items: flex-end;
    .swiper-wrapper {
      height: 85vh;
    }
    .swiper-slide {
      height: auto;
      .img_wrap {
        overflow: hidden;
        border-radius: 20px;
      }
    }
  }
  .swiper-slide-active {
    transform: scale(1.1); /* 활성 슬라이드 크기 증가 */
    transform-origin: center;
    transition: 0.5s ease-in-out;
  }
`;

const Banner = ({movieData}: any): JSX.Element => {
  return (
    <BannerEl>
      <Swiper
        spaceBetween={150}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        className="swiper_wrap"
      >
        {movieData.map((data: any, index: any) => (
          <SwiperSlide key={index}>
            <div className="img_wrap">
              <img
                src={"https://image.tmdb.org/t/p/original" + data.backdrop_path}
                alt="img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerEl>
  );
};

export default Banner;