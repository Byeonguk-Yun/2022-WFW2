import React, {useState} from "react";
import { useLocation, Link } from "react-router-dom";

import Slider from 'react-slick';
import '../css/Slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from '../dummy/restaurant.json';
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";
import Subway from "./Subway";

 
const SubwaySlider = ({props}) => {
    // const [ sidebar, setSidebar ] = useState(false);
    // const toggleSidebar = () => setSidebar(prevState => !prevState);


    //auto
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

      const location = useLocation().pathname;
      console.log(location);
      //const index = location.split('/');
  
      const subwayList = (data.list).filter(item => item.subway === props);

      console.log(`props: ${props}`);
    
    return(
        <>
        {/* 
        <HeaderBar  openSidebar={toggleSidebar}/>
        <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />  
        */}

        <div className="autoSlider">
        <Subway />
            <Slider {...settings}>
                {subwayList.map( item => (

                        <div className="menu">
                            <div className="menu-top">
                                <Link to={`/introduction/${item.rastaurant}`}>
                                <img src={process.env.PUBLIC_URL + `${item.rImg}`} alt={item.rastaurant}/>
                                </Link>
                                <h1>{item.rastaurant}</h1>
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

export default SubwaySlider;