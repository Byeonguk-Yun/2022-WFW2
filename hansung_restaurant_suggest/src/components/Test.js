import React from "react";

import Subway from "./Subway";
import SubwaySlider from './SubwaySlider';

import data from '../dummy/restaurant.json';

const Test = () => {


    return (
        <>
        <Subway />
        <SubwaySlider props={data.list[0].subway}/>
        </>
    
    );
}
export default Test;