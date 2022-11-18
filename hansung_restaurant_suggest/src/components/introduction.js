import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import userList from "../dummy/user.json"
import restaurant from "../dummy/restaurant.json"


const Introduction = () => {
    var path = useLocation().pathname;
    console.log("주소 : " + decodeURI(path));
    const index = path.split('/');
    console.log("식당 : " + decodeURI(index[2]));
    var address = null;
    var menu = [];
    var openTime = null;

    //const address = restaurant.list.map = (l.restaurant ==  index[2]) => ())
    var about = null;
    const addr = restaurant.list.map((r) => {
        console.log(r.rastaurant);
        if((r.rastaurant) === decodeURI(index[2]))
            return about = r;
        // 오류
    })
    if(about != null){
        address = about.address;
        // menuName = 
        openTime = about.openTime;
    }

    return (
        <div>

            <p style={{ textAlign: "center", margin: 10 }}>소개</p>
            <h3 style={{padding:"10px"}}>스타동 한성대점</h3>
            <div style={{border: "1px dashed" }}>
                <p style={{padding:"10px", fontWeight:"bold"}}>주소  {address}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>메뉴</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>{menu}</p>
                <p style={{padding:"10px", fontWeight:"bold"}}>OPEN     {openTime}</p>
                
            </div>
        </div>
    );
}

export default Introduction;