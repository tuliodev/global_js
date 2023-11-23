import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/" element={<Login />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;