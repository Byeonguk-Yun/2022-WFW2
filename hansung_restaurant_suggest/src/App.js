import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/introduction';
import AutoSlider from './components/Slider';
import CategoryMain from './components/CategoryMain';
import { Korean, Chinese, Japanese, Western, Snack, Dessert } from './components/Categories';

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage/:id/:pw" element={<MyPage />} />
      <Route path="/introduction/:id/:restaurant" element={<Introduction />} />

      <Route path="/autoslider" element={<AutoSlider />}/>

      <Route path="/categories" element={<CategoryMain />} />
      <Route path="/korean" element={<Korean />} />
      <Route path="/chinese" element={<Chinese />} />
      <Route path="/japanese" element={<Japanese />} />
      <Route path="/western" element={<Western />} />
      <Route path="/snack" element={<Snack />} />
      <Route path="/dessert" element={<Dessert />} />
    </Routes>
  );
}

export default App;