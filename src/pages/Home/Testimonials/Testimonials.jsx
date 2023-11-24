/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {reviews.length === 0 && <SwiperSlide>Loading...</SwiperSlide>}
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 flex flex-col items-center">
              {/* <p className='text-base font-bold'>{review.rating}</p> */}
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-base py-8">{review.details}</p>
              <p className="text-3xl uppercase text-orange-400">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
