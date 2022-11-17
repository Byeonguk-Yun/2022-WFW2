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
    var like = null; // const는 재지정 불가

    const likes = userList.user.map((u) => {
        if(u.id === id && u.pw === pw)
            return like = u.like.join(", ");
        // 오류
    })

    if(like === null){
        like = "Error";
    }

    console.log("Like : " + like);

    return(
        <div style={{ textAlign: "center", margin: 10 }}>
            <div>
                <h3>마이페이지</h3>
                <h5>ID : {id}</h5>
                <h5>PW : {pw}</h5>
                <h5>좋아요한 식당 : {like}</h5>

                <Link to={"/login"}>
                    <button>뒤로가기</button>
                </Link>
            </div>
        </div>
    );
}

export default MyPage;