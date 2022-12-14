import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Korean, Chinese, Japanese, Western, Dessert } from './Pages';

const CategoryShow = () => (
    <Routes>
        <Route path="/korean" element={<Korean />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/western" element={<Western />} />
        <Route path="/dessert" element={<Dessert />} />
    </Routes>
)

export default CategoryShow;