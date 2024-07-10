import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/17--arrow---right.svg";
import { sertificatesData } from "../../../public/data";

export const Sertificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="mx-auto max-w-[1440px] w-full mt-[150px] space-x-[110px] bg-color overflow-hidden flex flex-col md:flex-row items-start py-0 pr-0 pl-[65px] md:p-5 box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-11xl text-color1 font-t1">
      <div className="max-w-[242px] w-full flex flex-col items-start justify-start gap-[25px]">
        <h2 className="m-0 text-[#202020] text-[30px] font-[500] max-w-[210px] w-full relative leading-[120%] mq450:text-[18px] mq450:leading-[22px] mq800:text-[24px] mq800:leading-[29px]">
          Сертификаты <span className="whitespace-nowrap">на продукцию</span>
        </h2>
      </div>
      <section className="flex flex-col items-start justify-start gap-[40px] w-full md:w-[1310px] text-left text-base text-color1 font-t1 mq800:gap-[20px]">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full h-[280px] inline-flex items-start gap-2.5"
        >
          {sertificatesData.map((sertificate, index) => (
            <div key={index} className="relative w-full md:w-[322px] h-[280px]">
              <div className="relative w-full h-full flex justify-center bg-[white] items-center rounded-[10px] border border-solid border-[#e5e2ee]">
                <img
                  className="object-contain max-w-full max-h-full"
                  alt="Cropped"
                  src={sertificate}
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-full flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div
              onClick={handlePrev}
              className="cursor-pointer select-none duration-200 hover:border-[#088269] relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1]"
            >
              <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
                <img
                  className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                  alt="Element arrow right"
                  src={LeftArrow}
                />
              </div>
            </div>
            <div
              onClick={handleNext}
              className="cursor-pointer select-none duration-200 hover:border-[#088269] relative w-[41px] h-[41px] bg-x-1l-ubo-z rounded-[40px] overflow-hidden border border-solid border-[#d5d1e1] rotate-180"
            >
              <div className="relative w-[17px] h-[17px] top-3 left-3 rotate-90">
                <img
                  className="absolute top-0 left-0 -rotate-90 w-[17px] h-[17px]"
                  alt="Element arrow right"
                  src={LeftArrow}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
