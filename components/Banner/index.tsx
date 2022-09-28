import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import styles from './styles.module.css';

import 'swiper/css';
import Image from 'next/image';


function Banner() {

  return (
    <div className={styles.container} >
      <Swiper
        slidesPerView={1}
        loop
        className={styles.swiper}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}

        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.SlideImg} >


            1
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.SlideImg} >
            2
          </div>
        </SwiperSlide>


      </Swiper>
    </div >
  );

}


export default Banner;