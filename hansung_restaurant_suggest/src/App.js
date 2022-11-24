import React, { useState } from 'react';
import HeaderBar from './component/HeaderBar';
import SideBar from './component/SideBar';
import CategoryShow from './component/categorySection';

const App = () => {
  const [ sidebar, setSidebar ] = useState(false);
  const toggleSidebar = () => setSidebar(prevState => !prevState);
  
  return (
    <div>
      <HeaderBar openSidebar={toggleSidebar} />
      <CategoryShow />
      <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
    </div>
  );
}

export default App;