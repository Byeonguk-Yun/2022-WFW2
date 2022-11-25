import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/SideBar.css'

const SideBar = ({sidebar, closeSidebar}) => {
    return (
        <div id="sidemenu" className={sidebar?"sidebar sidebar--open":"sidebar"}>
            <li onClick={closeSidebar}><FaChevronLeft /></li>
            <Link to="/korean" style={{ color: '#ffffff' }}><li>한식</li></Link>
            <Link to="/chinese" style={{ color: '#ffffff' }}><li>중식</li></Link>
            <Link to="/japanese" style={{ color: '#ffffff' }}><li>일식</li></Link>
            <Link to="/western" style={{ color: '#ffffff' }}><li>양식</li></Link>
            <Link to="/snack" style={{ color: '#ffffff' }}><li>분식</li></Link>
            <Link to="/dessert" style={{ color: '#ffffff' }}><li>카페 / 디저트</li></Link>
        </div>
    )
}

export default SideBar;