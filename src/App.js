import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideBar';
import CategoryShow from './components/categorySection';

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