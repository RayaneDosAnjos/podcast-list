import Header from "../components/Header"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";


function Home() {
  return (
    <div style={{ height: '428px' }} >
      <Header />

      <Swiper spaceBetween={50} pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>

          <img src="https://ottvsimg.ottvs.com.br/res/banner/641cf78f-5da5-42a5-915c-dfd033a47391.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>oi</SwiperSlide>
        <SwiperSlide>oi aDAD</SwiperSlide>
        <SwiperSlide>oi adad</SwiperSlide>
        <SwiperSlide>o fsdfsdf  i</SwiperSlide>
        <SwiperSlide>oisdfsdf</SwiperSlide>
      </Swiper>
    </div>)
}

export default Home