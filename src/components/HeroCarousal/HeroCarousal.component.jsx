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
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/every-marvel-movie-to-watch-before-shang-chi.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5",
    "https://images4.alphacoders.com/975/thumb-1920-975294.jpg" ,
        "https://wahitimuforum.com/wp-content/uploads/2021/07/301078813.gallery-650x381.jpg",
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