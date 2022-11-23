import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/Introduction';
import HeaderMenu from './components/Header';
import SimpleInfo1 from './components/SimpleInfo1';

function App() {
 
  /*
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mypage" element={<MyPage />} />
  </Routes>
  */
  return(
    //<Login/>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mypage/:id/:pw" element={<MyPage />} />
    <Route path="/introduction/:restaurant" element={<Introduction />} />
  </Routes>
  );
  
}

export default App;