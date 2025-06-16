import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Images and their titles
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.svg";
import img8 from "../assets/img8.svg";

const companies = [
  { img: img1, name: "Finance & Investing" },
  { img: img2, name: "Health & Wellness" },
  { img: img3, name: "Gaming & Esports" },
  { img: img4, name: "Music & Culture" },
  { img: img5, name: "Food & Recipes" },
  { img: img7, name: "Travel" },
  { img: img6, name: "Art & Design" },
  { img: img8, name: "Education" },
];

const Slider = () => {
  return (
    <div className="w-full mx-auto my-16 py-16 ">
      <h2 className="text-4xl md:text-5xl w-11/12 mx-auto font-bold text-center text-[#4c637c] mb-5">
        Dive Into Topics That Matter Most to You
      </h2>
      <p className="text-center w-11/12 mx-auto text-gray-400">
        From ideas to inspiration — browse all our blog posts in one place. Stay
        updated, informed, and inspired with every scroll.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="rounded-xl w-10/12 md:w-11/12 md:max-w-[1500px] mx-auto"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[radial-gradient(75%_115%_at_50%_0%,rgba(255,255,255,0)_0%,rgba(76,99,124,1)_100%)] my-16 rounded-xl h-96 hover:shadow-[0px_3px_54px_0px_rgba(0,0,0,0.2)] glow-border    border-t-2 border-[#4c637c] cursor-grab text-center">
              <img
                src={company.img}
                alt={company.name}
                className="w-full hover:scale-110 transition-transform duration-300 h-72 object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold  text-white p-2 ">
                {company.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
