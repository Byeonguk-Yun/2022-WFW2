import React from "react";
import Slider from 'react-slick';
import '../css/Slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from '../dummy/restaurant.json';
import HeaderMenu from "./Header";
import SideBar from "./SideBar";

const AutoSlider = () => {

    // //auto
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
    
    return(
        <>
        
        <div className="autoSlider">
            <Slider {...settings}>
                {data.list.map( item => (
                    <div className="menu">
                        <div className="menu-top">
                            <img src={process.env.PUBLIC_URL + `/image/rImg/${item.rImg}`} alt={item.restaurant}/>
                            <h1>{item.restaurant}</h1>
                        </div>
                        <div className="menu-bottom">
                            <p>지하철역: {item.subway}</p>
                            <p className="category">카테고리: {item.category}</p>
                        </div>
                    </div>
                
                ))}
            </Slider>
        </div>  
        </>      
    );

}

export default AutoSlider;