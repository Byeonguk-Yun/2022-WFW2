import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import siteLogo from '../Logo1.JPG';
import '../css/HeaderBar.css'

const HeaderBar = ({openSidebar}) => {
    return (
        <div className='HeaderBar'>
            <ul>
                <li className='burger' onClick={openSidebar}>
                    <FaBars size={40} />
                </li>
                <li>
                    <a href='/'>
                        <img src={siteLogo} alt='Taste of Hansung' className='Logo' />
                    </a>
                </li>
                <li className='station'>성신여대입구</li>
                <li className='station'>한성대입구</li>
                <li className='station'>혜화</li>
            </ul>
        </div>
    )
}

export default HeaderBar;