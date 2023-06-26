import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Foo from './Foo';
import Bar from './Bar';
import Emma from './Emma';
import Rommie from './Rommie';

function EmmaRoutes() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/sig" element={<Emma />}/>
          <Route path="/sig/emma" element={<Emma />}/>
          <Route path="/sig/rommie" element={<Rommie />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default EmmaRoutes
