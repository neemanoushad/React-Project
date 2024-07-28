import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Componenets/Header';
import Footer from '../Componenets/Footer/Footer';
import Home from '../Componenets/Home/Home';
import Booking from '../Pages/Booking/Booking';
import Doctor from '../Pages/Doctor/Doctor';
import Location from '../Pages/Location/Location';
import Wrong from '../Componenets/Wrong/Wrong';

function LayoutRoute() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/React-Project" element={<Home />} />
        <Route path="/service" element={<Booking />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/location" element={<Location />} />
        <Route path="/*" element={<Wrong />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayoutRoute;
