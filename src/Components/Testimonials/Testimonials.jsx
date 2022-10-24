/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Testimonials.css";

// SwiperJs
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2Favatar1.jpg?alt=media&token=3f6d8b9e-526d-4714-a27b-d4d4795c5fd5",
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam provident, reprehenderit soluta incidunt totam facilis quidem placeat eaque quae possimus voluptatibus tempore asperiores aut eum doloremque hic aspernatur. Iure!",
  },
  {
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2Favatar2.jpg?alt=media&token=afc5cc5c-644d-4361-a653-5e34fe55bca0",
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam provident, reprehenderit soluta incidunt totam facilis quidem placeat eaque quae possimus voluptatibus tempore asperiores aut eum doloremque hic aspernatur. Iure!",
  },
  {
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2Favatar3.jpg?alt=media&token=f0acbe77-3f1a-4eed-8d3d-d027bac924d9",
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam provident, reprehenderit soluta incidunt totam facilis quidem placeat eaque quae possimus voluptatibus tempore asperiores aut eum doloremque hic aspernatur. Iure!",
  },
  {
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2Favatar4.jpg?alt=media&token=ee90fd4b-a674-419d-8c1f-b7bb9ee87847",
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam provident, reprehenderit soluta incidunt totam facilis quidem placeat eaque quae possimus voluptatibus tempore asperiores aut eum doloremque hic aspernatur. Iure!",
  },
];
function Testimonials() {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
