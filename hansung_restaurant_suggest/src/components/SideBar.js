import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import './SideBar.css'

const SideBar = ({sidebar, closeSidebar}) => {
    return (
        <div id="sidemenu" className={sidebar?"sidebar sidebar--open":"sidebar"}>
            <li onClick={closeSidebar}><FaChevronLeft /></li>
            <li>한식</li>
            <li>중식</li>
            <li>일식</li>
            <li>양식</li>
            <li>카페 / 디저트</li>
        </div>
    )
}

export default SideBar;