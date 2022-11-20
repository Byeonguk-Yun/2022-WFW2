import React, { useState } from 'react';
import HeaderBar from './component/HeaderBar';
import SideBar from './component/SideBar';
import Backdrop from './component/Backdrop';

const App = () => {
  const [ sidebar, setSidebar ] = useState(false);
  const toggleSidebar = () => setSidebar(prevState => !prevState);
  
  return (
    <div>
      <HeaderBar openSidebar={toggleSidebar} />
      <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
    </div>
  );
}

export default App;