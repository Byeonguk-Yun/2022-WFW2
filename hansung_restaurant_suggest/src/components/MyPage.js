import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import userList from '../dummy/user.json';
import HeaderMenu from './Header';
import './MyPage.css';
import SimpleInfo1 from './SimpleInfo1';

const MyPage = () => {
    const path = useLocation().pathname;
    const index = path.split('/');
    console.log("ID : " + index[2]);
    console.log("PW : " + index[3]);

    const error = ["Error"];
    
    const id = index[2];
    const pw = index[3];
    var like = null;
    var img = null;
    var recent = null;

    const likes = userList.user.map((u) => {
        if(u.id === id && u.pw === pw)
            return like = u.like
        // 오류
    })

    const recents = userList.user.map((u) => {
        if(u.id === id && u.pw === pw)
            return recent = u.recent.join(", ")
        // 오류
    })

    const profile = userList.user.find((u) => {
        if(u.id === id && u.pw === pw)
            return img=u.profile;
        // 오류
    })



    console.log("Like : " + like);
    console.log("프로필 : " + img);
    console.log("recent : " + recent);

    return(
        <>
        <HeaderMenu />
        <div class="entire">
            <h3 style={{ textAlign: "center" }}>마이페이지</h3>
            <div class="group1">
                <div class="img"><img src={process.env.PUBLIC_URL+img} style={{width : "100px", height:"100px"}}></img></div>
                <div class="info">
                    <p style={{paddingTop:"30px"}}>ID : {id}</p>
                </div>
            
            </div>
            <div class="likeRes" style={{backgroundColor:"deepskyblue"}}>
                <p style={{marginLeft:"15px", fontWeight:"bold"}}>좋아요한 식당 List</p>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 restaurant={like[0]}></SimpleInfo1></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 restaurant={like[1]}></SimpleInfo1></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 restaurant={like[1]}></SimpleInfo1></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 restaurant={like[1]}></SimpleInfo1></div>
                
            </div>
            <div>
                <h5>최근에 본 식당 : {recent}</h5>
            </div>
            <div class="bottom">
                <Link to={"/"}>
                    <button class="back">뒤로가기</button>
                </Link>
                <Link to={"/introduction/호호식당 대학로"}>
                    <button class="resInfo">식당소개</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default MyPage;