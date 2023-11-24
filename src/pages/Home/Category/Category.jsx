/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/sectionTitle/sectionTitle';


// Make sure to import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import your images
import slider1 from '../../../assets/assets/home/slide1.jpg';
import slider2 from '../../../assets/assets/home/slide2.jpg';
import slider3 from '../../../assets/assets/home/slide3.jpg';
import slider4 from '../../../assets/assets/home/slide4.jpg';
import slider5 from '../../../assets/assets/home/slide5.jpg';

const Category = () => {
  return (
    <section>
      <SectionTitle 
      subHeading={"From 11:00am to 10:00pm"} 
      heading={"Order Online"}>
      </SectionTitle>
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="slider1" />
          <h3 className='text-center text-2xl font-bold uppercase -mt-16 mr-14 text-white'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider2" />
          <h3 className='text-center text-2xl font-bold uppercase -mt-16 mr-14 text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider3" />
          <h3 className='text-center text-2xl font-bold uppercase -mt-16 mr-14 text-white'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="slider4" />
          <h3 className='text-center text-2xl font-bold uppercase -mt-16 mr-14 text-white'>Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="slider5" />
          <h3 className='text-center text-2xl font-bold uppercase -mt-16 mr-14 text-white'>Special Salad</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
