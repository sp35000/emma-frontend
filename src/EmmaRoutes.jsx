import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Charlotte from './components/sig/Charlotte';
import Elle from './components/sig/Elle';
import Emma from './components/sig/Emma';
import Finn from './components/sig/Finn';
import Melody from './components/sig/Melody';
import Rommie from './components/sig/Rommie';
import Serina from './components/sig/Serina';
import Trilena from './components/sig/Trilena';

function EmmaRoutes() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/sig" element={<Emma />}/>
          <Route path="/sig/elle" element={<Elle />}/>
          <Route path="/sig/charlotte" element={<Charlotte />}/>
          <Route path="/sig/finn" element={<Finn />}/>
          <Route path="/sig/melody" element={<Melody />}/>
          <Route path="/sig/rommie" element={<Rommie />}/>
          <Route path="/sig/serina" element={<Serina />}/>
          <Route path="/sig/trilena" element={<Trilena />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default EmmaRoutes
