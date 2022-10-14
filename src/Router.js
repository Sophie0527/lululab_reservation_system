import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationList from './pages/ReservationList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReservationList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
