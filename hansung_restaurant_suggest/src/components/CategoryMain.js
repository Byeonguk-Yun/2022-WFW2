import React from 'react';
import { useState } from 'react';
import HeaderBar from './HeaderBar';
import SideBar from './SideBar';

const CategoryMain = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const toggleSidebar = () => setSidebar(prevState => !prevState);

    return (
        <div>
            <HeaderBar openSidebar={toggleSidebar} />
            <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
        </div>
    )
}

export default CategoryMain;