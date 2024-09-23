import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Amaka",
      role: "Classroom Teacher",
      comment:
        "Managing student records used to be a daunting task, but with HESED, it’s become incredibly simple.",
      rating: 5,
    },
    {
      name: "Mr. Johnson",
      role: "Head Teacher",
      comment:
        "We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.",
      rating: 5,
    },
    {
      name: "Mr. Wilma",
      role: "Head Teacher",
      comment:
        "We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.",
      rating: 5,
    },
    {
      name: "Mr. Segun",
      role: "Head Teacher",
      comment:
        "We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.",
      rating: 5,
    },
    {
      name: "Mr. Janet",
      role: "Head Teacher",
      comment:
        "We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.",
      rating: 5,
    },
    {
      name: "Mr. John",
      role: "Head Teacher",
      comment:
        "We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.",
      rating: 5,
    },
    {
      name: "Mr. Philip",
      role: "Head Teacher",
      comment:
        "We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.",
      rating: 5,
    },
    {
      name: "Mr. Ken",
      role: "Head Teacher",
      comment:
        "We’ve seen a noticeable improvement in parent-teacher communication since implementing HESED.",
      rating: 5,
    },
  ];

  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold mb-8">
        What Our Users Are Saying
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: false,
          enabled: false,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: true,
          stopOnLastSlide: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-sm text-gray-600 italic mb-4">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
                <div className="ml-auto">{"⭐".repeat(testimonial.rating)}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ marginTop: "30px" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: false,
            enabled: false,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <p className="text-sm text-gray-600 italic mb-4">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: false,
            enabled: false,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <p className="text-sm text-gray-600 italic mb-4">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
