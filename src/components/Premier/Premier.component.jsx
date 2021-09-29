import React from 'react'
import Slider from 'react-slick';

//components
import Poster from '../Poster/Poster.component';


const Premier = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const PremierImages = [
        {
            src : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-numaxmczla-portrait.jpg",
            alt : "zack",
            title:"The Conjuring : The devil made me do it",
            subtitle: "English",
        },
        {
            src : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-numaxmczla-portrait.jpg",
            alt : "zack",
            title:"The Conjuring : The devil made me do it",
            subtitle: "English",
        },
        {
            src : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-numaxmczla-portrait.jpg",
            alt : "zack",
            title:"The Conjuring : The devil made me do it",
            subtitle: "English",
        },
        {
            src : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-numaxmczla-portrait.jpg",
            alt : "zack",
            title:"The Conjuring : The devil made me do it",
            subtitle: "English",
        },




    ];


    return (
        
        <>
            <Slider{...settings} >
            {PremierImages.map((image) => (
                <Poster {...image}/>
            ))}
            </Slider>
        </>
    );
};

export default Premier;
