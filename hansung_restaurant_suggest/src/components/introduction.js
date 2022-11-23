/* global kakao */
import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import restaurant from "../dummy/restaurant.json"
import axios from 'axios';
//import cn from "classnames";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "react-load-script";
import MapApi from './MapApi'

/* global kako */

const Introduction = () => {
    var path = useLocation().pathname;
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
        <div>
            <h3 style={{padding:"10px"}}>{name}</h3>
            <div style={{border: "1px dashed" }}>
                <p style={{padding:"10px", fontWeight:"bold"}}>주소  {address}</p>
                
                <MapApi />

                <p style={{padding:"10px", fontWeight:"bold"}}>메뉴</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>{about.menu.name.join(", ")}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>{about.menu.price.join(", ")}</p>
                <p>
                    <img src={process.env.PUBLIC_URL+about.menu.img[0]} style={{width:"100px", height:"100px"}}></img>
                    <img src={process.env.PUBLIC_URL+about.menu.img[1]} style={{width:"100px", height:"100px"}}></img>
                    <img src={process.env.PUBLIC_URL+about.menu.img[2]} style={{width:"100px", height:"100px"}}></img>
                    <img src={process.env.PUBLIC_URL+about.menu.img[3]} style={{width:"100px", height:"100px"}}></img>
                </p>

                <p style={{padding:"10px", fontWeight:"bold"}}>OPEN     {openTime}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>CLOSE     {closeTime}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>BREAK     {about.breakTime.start + " ~ " + about.breakTime.end}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>휴무일 {dayOff}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>Tel {tel}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>LastOrder 점심 : {about.lastOrder.점심}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>LastOrder 저녁 : {about.lastOrder.저녁}</p>
            </div>
        </div>
    );
}

export default Introduction;