import React from "react";
import Hero from "./pages/Hero";
import { BrowserRouter, Route, Routes } from "react-router";
import Booking from "./pages/Booking";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="booking" element={<Booking />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
