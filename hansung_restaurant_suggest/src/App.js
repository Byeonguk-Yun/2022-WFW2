import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/introduction';
import AutoSlider from './components/Slider';
import CategoryMain from './components/CategoryMain';
import { Korean, Chinese, Japanese, Western, Dessert } from './components/Categories';
import Subway from './components/Subway';
import Test from './components/Test';
import FamousrtrList from './components/FamousrtrList';

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage/:id/:pw" element={<MyPage />} />
      <Route path="/introduction/:id/:restaurant" element={<Introduction />} />

      <Route path="/introduction/:restaurant" element={<Introduction />} />

      {/* 
      <Route path="/subway/*" element={<Subway />}>
        <Route path='/autoslider' element={<AutoSlider />}/>
      </Route> 
      */}

      <Route path='/slider' element={<AutoSlider />}/>
      <Route path='/subway' element={<Subway />}/>
      <Route path='/famous' element={<FamousrtrList />}/> 
      <Route path='/test' element={<Test />}/>

      <Route path="/categories" element={<CategoryMain />} />
      <Route path="/korean" element={<Korean />} />
      <Route path="/chinese" element={<Chinese />} />
      <Route path="/japanese" element={<Japanese />} />
      <Route path="/western" element={<Western />} />
      <Route path="/dessert" element={<Dessert />} />
    </Routes>
  );
}

export default App;