import React from 'react';
import siteLogo from '../Logo1.JPG';

const HeaderMenu = () => (
    <div className='HeaderBar'>
        <ul>
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

export default HeaderMenu;