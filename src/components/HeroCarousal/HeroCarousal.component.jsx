import React from "react";
//import react slick
import HeroSlider from "react-slick";



//components 
import {NextArrow , PrevArrow} from "./Arrows.component";


const HeroCarousal = () => {

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1 ,
    nextArrow : <NextArrow />,
    prevArrow : <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    nextArrow : <NextArrow />,
    prevArrow : <PrevArrow />,
  };

  const images = [
    "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1042&q=80",
    "https://images4.alphacoders.com/975/thumb-1920-975294.jpg" ,
        "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  ];

  return (
    <>
       <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3 focus:outline-none ">
             <img
                src={image}
                alt="testing"
                className="w-full h-full "
            />
            </div>
          ))}
        </ HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className = " w-full h-96 px-2 py-3 focus:outline-none ">
              <img
                src={image}
                alt="testing"
                className=" w-full h-full rounded-md "
              />
            </div>
          ))}
        </ HeroSlider>
      </div>
    </>
  );
};


export default HeroCarousal;