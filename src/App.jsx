import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmmaRoutes from './components/EmmaRoutes';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu />
    <Container fluid>
    <EmmaRoutes />
    </Container>
    </>
  )
}

export default App
