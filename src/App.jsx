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
    <EmmaRoutes />

    <Container fluid>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
    </Container>
    </>
  )
}

export default App
