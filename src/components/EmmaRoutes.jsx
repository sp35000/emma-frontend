import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Foo from './Foo';
import Bar from './Bar';

function EmmaRoutes() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/foo" element={<Foo />}/>
          <Route path="/bar" element={<Bar />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default EmmaRoutes
