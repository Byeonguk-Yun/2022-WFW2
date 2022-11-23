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
    /*
    useEffect(() => {
        let container = document.getElementById("map");
    
        let options = {
          center: new window.kakao.maps.LatLng(35.85133, 127.734086),
          level: 13,
        };
    
        let map = new window.kakao.maps.Map(container, options);
    
        console.log("loading kakaomap");
    }, []);
    */
   
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

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }; 

    /*
    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch({address}, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } 
    }); 
    */

    /*
    <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
        >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{color:"#000"}}>Hello World!</div>
        </MapMarker>
    </Map>
    */

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