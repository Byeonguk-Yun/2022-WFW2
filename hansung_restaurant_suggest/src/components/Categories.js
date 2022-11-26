import { useState } from 'react';
import HeaderBar from './HeaderBar';
import SideBar from './SideBar';
import '../css/Categories.css';

export const Korean = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);
    
    return (
        <div>
            <HeaderBar openSidebar={toggleSidebar} />
            <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <br></br><br></br><br></br><br></br><br></br>
            <center><h2>한식</h2></center>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/홍추곱창카페.jpeg" alt="이미지 준비중" size="100%"></img>
                    <center><p>홍추곱창카페</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/밥짓고티우림.jpeg" alt="이미지 준비중"></img>
                    <center><p>밥짓고티우림</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/오이지 대학로.jpeg" alt="이미지 준비중"></img>
                    <center><p>오이지 대학로</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/혜화도담.jpg" alt="이미지 준비중"></img>
                    <center><p>혜화도담</p></center>
                </div>
            </div>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/태조감자국.jpeg" alt="이미지 준비중"></img>
                    <center><p>태조감자국</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/팔백집.png" alt="이미지 준비중"></img>
                    <center><p>팔백집</p></center>
                </div>
            </div>
        </div>
    )
};

export const Chinese = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);

    return (
        <div>
            <HeaderBar openSidebar={toggleSidebar} />
            <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <br></br><br></br><br></br><br></br><br></br>
            <center><h2>중식</h2></center>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/중화명가 삼선점.png" alt="이미지 준비중" size="100%"></img>
                    <center><p>중화명가 삼선점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/송림원.png" alt="이미지 준비중"></img>
                    <center><p>송림원</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/탕화쿵푸마라탕 대학로점.jpeg" alt="이미지 준비중"></img>
                    <center><p>탕화쿵푸마라탕 대학로점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/하이디라오 대학로점.jpeg" alt="이미지 준비중"></img>
                    <center><p>하이디라오 대학로점</p></center>
                </div>
            </div>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/애정마라샹궈.png" alt="이미지 준비중" size="100%"></img>
                    <center><p>애정마라샹궈</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/라라면가.jpeg" alt="이미지 준비중"></img>
                    <center><p>라라면가</p></center>
                </div>
            </div>
        </div>
    )
};

export const Japanese = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);

    return (
        <div>
            <HeaderBar openSidebar={toggleSidebar} />
            <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <br></br><br></br><br></br><br></br><br></br>
            <center><h2>일식</h2></center>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/스타동 한성대점.jpg" alt="이미지 준비중" size="100%"></img>
                    <center><p>스타동 한성대점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/스시현.jpeg" alt="이미지 준비중"></img>
                    <center><p>스시현</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/스시마시따.png" alt="이미지 준비중"></img>
                    <center><p>스시마시따</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/호호식당 대학로.jpeg" alt="이미지 준비중"></img>
                    <center><p>호호식당 대학로</p></center>
                </div>
            </div>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/동경산책 성신여대점.jpeg" alt="이미지 준비중" size="100%"></img>
                    <center><p>동경산책 성신여대점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/윤휘식당.jpeg" alt="이미지 준비중"></img>
                    <center><p>윤휘식당</p></center>
                </div>
            </div>
        </div>
    )
};

export const Western = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);

    return (
        <div>
            <HeaderBar openSidebar={toggleSidebar} />
            <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <br></br><br></br><br></br><br></br><br></br>
            <center><h2>양식</h2></center>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/부부셰프.jpeg" alt="이미지 준비중" size="100%"></img>
                    <center><p>부부셰프</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/돈시락.jpeg" alt="이미지 준비중"></img>
                    <center><p>돈시락</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/정돈 대학로본점.jpeg" alt="이미지 준비중"></img>
                    <center><p>정돈 대학로본점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/토끼정.jpeg" alt="이미지 준비중"></img>
                    <center><p>토끼정 대학로점</p></center>
                </div>
            </div>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/마녀주방 성신여대점.jpeg" alt="이미지 준비중" size="100%"></img>
                    <center><p>마녀주방 성신여대점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/초이양식.jpeg" alt="이미지 준비중"></img>
                    <center><p>초이양식</p></center>
                </div>
            </div>
        </div>
    )
};

export const Snack = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);

    return (
        <div>
            <HeaderBar openSidebar={toggleSidebar} />
            <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <br></br><br></br><br></br><br></br><br></br>
            <center><h2>분식</h2></center>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/신전떡볶이 한성대점.jpeg" alt="이미지 준비중" size="100%"></img>
                    <center><p>신전떡볶이 한성대점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/바르다김선생 한성대입구역점.jpeg" alt="이미지 준비중"></img>
                    <center><p>바르다김선생 한성대입구역점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/부부김밥.png" alt="이미지 준비중"></img>
                    <center><p>부부김밥</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/봉쥬떡볶이.jpeg" alt="이미지 준비중"></img>
                    <center><p>봉쥬떡볶이</p></center>
                </div>
            </div>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/배떡 성신여대점.jpeg" alt="이미지 준비중" size="100%"></img>
                    <center><p>배떡 성신여대점</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/수아당.png" alt="이미지 준비중"></img>
                    <center><p>수아당</p></center>
                </div>
            </div>
        </div>
    )
};

export const Dessert = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);

    return (
        <div>
            <HeaderBar openSidebar={toggleSidebar} />
            <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <br></br><br></br><br></br><br></br><br></br>
            <center><h2>디저트 / 카페</h2></center>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/달콤한위로.png" alt="이미지 준비중" size="100%"></img>
                    <center><p>달콤한위로</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/해로커피.jpeg" alt="이미지 준비중"></img>
                    <center><p>해로커피</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/카페다오.png" alt="이미지 준비중"></img>
                    <center><p>카페다오</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/셰이디드.jpeg" alt="이미지 준비중"></img>
                    <center><p>셰이디드</p></center>
                </div>
            </div>
            <div className='list'>
                <div className='item'>
                    <img src="../img/rImg/카페 구월.jpeg" alt="이미지 준비중" size="100%"></img>
                    <center><p>카페 구월</p></center>
                </div>
                <div className='item'>
                    <img src="../img/rImg/카페코지 성신여대점.png" alt="이미지 준비중"></img>
                    <center><p>카페코지 성신여대점</p></center>
                </div>
            </div>
        </div>
    )
};