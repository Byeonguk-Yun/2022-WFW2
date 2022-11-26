import React, {useState} from 'react';

import SubwaySlider from './SubwaySlider';
import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";

import '../css/Subway.css';
import '../css/SideBar.css';
import '../css/HeaderBar.css';

const Subway = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);

    const haehwa = `${process.env.PUBLIC_URL + `/image/haehwaSubway.png`}`;
    const hansung = `${process.env.PUBLIC_URL + `/image/hansungSubway.png`}`;
    const sungsin = `${process.env.PUBLIC_URL + `/image/sungsinSubway.png`}`;
    const prevBtn = `${process.env.PUBLIC_URL + `/image/left_btn.png`}`;
    const nextBtn = `${process.env.PUBLIC_URL + `/image/right_btn.png`}`;

    const slideImgList = [haehwa, hansung, sungsin];
    const slideImgLength = slideImgList.length-1;
    const subwayList = ["혜화", "한성대", "성신여대"];

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
    //useEffect = (() => console.log(`${subwayList[currentList]}`), [currentList]);


    return (
        <>
        <HeaderBar openSidebar={toggleSidebar}/>
        <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />  

        <div>
        <div className='subway'>
                <div className='subway-top'>
                    <div className='prev'><img src={prevBtn} onClick={prev}/></div>
                    <div className='content'><img src={slideImgList[currentList]}/></div>
                    <div className='next'><img src={nextBtn} onClick={next}/></div>
                </div>
            </div>

            <SubwaySlider props={subwayList[currentList]} />


        </div>
       </>
    );
}
export default Subway; 