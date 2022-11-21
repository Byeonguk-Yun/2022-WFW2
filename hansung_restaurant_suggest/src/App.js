import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderMenu from './Header';
import SubwayAudio from './components/Subway';
import AutoSlider from './components/Slider';
import Carousel from './components/Carousel';
import SubwaySlider from './components/SubwaySlider';

function App() {
  // return (
  //   <div>
      
  //   </div>
  // );

  return (
    <Routes>
      <Route path="/" element={<HeaderMenu />}/>
      <Route path="/subway" element={<SubwayAudio />}/>
      <Route path="/slider" element={<AutoSlider />}/>
      <Route path="/carousel" element={<Carousel />}/>
      <Route path="/subwayslider" element={<SubwaySlider />}/>
    </Routes>
  );
}

export default App;