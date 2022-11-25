import React from 'react';
import {useState, useEffect} from 'react';
import { useLocation, Outlet} from 'react-router-dom';

import SubwaySlider from './SubwaySlider';
import '../css/Subway.css';

const Subway = () => {
    const haehwa = `${process.env.PUBLIC_URL + `/image/haehwaSubway.png`}`;
    const hansung = `${process.env.PUBLIC_URL + `/image/hansungSubway.png`}`;
    const sungsin = `${process.env.PUBLIC_URL + `/image/sungsinSubway.png`}`;
    const prevBtn = `${process.env.PUBLIC_URL + `/image/left_btn.png`}`;
    const nextBtn = `${process.env.PUBLIC_URL + `/image/right_btn.png`}`;

    const slideImgList = [haehwa, hansung, sungsin];
    const slideImgLength = slideImgList.length-1;
    const subwayList = ["혜화", "한성대", "성신"];

    const [currentList, setCurrentList] = useState(1);

    const prev = () => {
        if(currentList === 0) {
            setCurrentList(slideImgLength);
        }
        else {
            setCurrentList(currentList-1);
        }
    }
    const next= () => {
        if(currentList >= slideImgLength) {
            setCurrentList(0);
        }
        else {
            setCurrentList(currentList+1);
        }
    }
    useEffect = (() => console.log(`${subwayList[currentList]}`), [currentList]);


    // let location = useLocation();
    // console.log(location.pathname);
    

    return (
        <>
        <div className='subway'>
            <div className='subway-top'>
                <div className='prev'><img src={prevBtn} onClick={prev}/></div>
                <div className='content'><img src={slideImgList[currentList]}/></div>
                <div className='next'><img src={nextBtn} onClick={next}/></div>
            </div>
        </div>
        <div>
            <h1>Here is SubwaySlider.js components position</h1>
        </div>
       </>
    );
}
export default Subway; 