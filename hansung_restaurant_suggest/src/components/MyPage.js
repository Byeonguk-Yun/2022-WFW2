import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import userList from '../dummy/user.json';

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
            return like = u.like.join(", ")
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
        <div>
            <div>
                <h3 style={{ textAlign: "center", margin: 10 }}>마이페이지</h3>
                <img src={process.env.PUBLIC_URL+img} style={{width : "70px", height:"70px"}}></img>
                <h5>ID : {id}</h5>
                <h5>PW : {pw}</h5>
                <h5>좋아요한 식당 : {like}</h5>
                <h5>최근에 본 식당 : {recent}</h5>

                <Link to={"/login"}>
                    <button>뒤로가기</button>
                </Link>
                <Link to={"/introduction/호호식당 대학로"}>
                    <button>식당소개</button>
                </Link>
            </div>
        </div>
    );
}

export default MyPage;