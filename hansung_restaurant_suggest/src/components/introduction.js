/* global kakao */
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import restaurant from '../dummy/restaurant.json';
import axios from 'axios';
import MapApi from './MapApi';
import "./Introduction.css";
import HeaderMenu from './Header';


/* global kako */

const Introduction = () => {
    var path = useLocation().pathname;
    let navigate= useNavigate();
    console.log("주소 : " + decodeURI(path));
    const index = path.split('/');
    console.log("식당 : " + decodeURI(index[2]));

    const name = decodeURI(index[2]);
    
    var address = null;
    var menu = null;
    var openTime = null;
    var closeTime = null;
    var breakTime = null;
    var dayOff = null;
    var tel = null;
    var lastOrder = null;

    var about = null;
    const addr = restaurant.list.map((r) => {
        if((r.rastaurant) === name)
            return about = r;
        // 오류
    })

    if(about != null){
        console.log("인식");
        address = about.address;
        menu = () => {
            axios.get(about)
        }
        openTime = about.openTime;
        closeTime = about.closeTime;
        breakTime = () => {
            axios.get(about);
        }
        if(about.dayOff == null){
            dayOff = "연중무휴";
        }
        else
            dayOff = about.dayOff;
        tel = about.tel;
        lastOrder = () => {
            axios.get(about);
        }
    }    

    return (
        <>
        <div class="entire">
            <h3 style={{padding:"10px"}}>{name}</h3>
            <div style={{border: "1px dashed" }}>
                <p>주소  {address}</p>
                
                <MapApi />

                <p>메뉴</p>
                <p>{about.menu.name.join(", ")}</p>
                <p>{about.menu.price.join(", ")}</p>
                <p>
                    <img src={process.env.PUBLIC_URL+about.menu.img[0]}></img>
                    <img src={process.env.PUBLIC_URL+about.menu.img[1]}></img>
                    <img src={process.env.PUBLIC_URL+about.menu.img[2]}></img>
                    <img src={process.env.PUBLIC_URL+about.menu.img[3]}></img>
                </p>

                <p>OPEN     {openTime}</p>
                <p>CLOSE     {closeTime}</p>
                <p>BREAK     {about.breakTime.start + " ~ " + about.breakTime.end}</p>
                <p>휴무일 {dayOff}</p>
                <p>Tel {tel}</p>
                <p >LastOrder 점심 : {about.lastOrder.점심}</p>
                <p>LastOrder 저녁 : {about.lastOrder.저녁}</p>
            </div>

            <div class="bottom">
                
                    <button class="back" onClick={() => navigate(-1)}>뒤로가기</button>

            </div>
        </div>
        </>
    );
}

export default Introduction;