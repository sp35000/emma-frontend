import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Sig.css'

function Charlotte() {
  return (
    <>
    <Container fluid>
    <Row>
    <h1>Formula 1</h1>
    <h2>News</h2>
      <p>
         <Button variant="success"  href="https://www.formula1.com/" target="_blank">F1 - The Official Home</Button>
         <Button variant="success"  href="https://www.band.uol.com.br/esportes/automobilismo/formula-1" target="_blank">F1 na Band</Button>
         <Button variant="success"  href="https://youtube.com/playlist?list=PL1wt1uIbBJ2e7ziMVlHnEBOsa7tdvqsO9" target="_blank">Race Highlights</Button>
      </p>
    <h2><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRA5QOsqbF-4XnJyoYp72C81UkPNUGk32IwSrh80a9hTAdNj_kv_mel5yKw2Fh9Bqtt3RvPxiiB9gXi/pubhtml" target="_blank"> Classification</a></h2>
    {/*
    <!-- embedding Google spreadsheet-->
    <div class="frame-container">
 <!-- <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRA5QOsqbF-4XnJyoYp72C81UkPNUGk32IwSrh80a9hTAdNj_kv_mel5yKw2Fh9Bqtt3RvPxiiB9gXi/pubhtml?widget=true&amp;headers=false"></iframe> -->
    <iframe class="responsive-iframe" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRA5QOsqbF-4XnJyoYp72C81UkPNUGk32IwSrh80a9hTAdNj_kv_mel5yKw2Fh9Bqtt3RvPxiiB9gXi/pubhtml?widget=true&amp;headers=false" width="380 px" height="600 px"></iframe>
  </div>
 </div>
 <div class="col-md-12 columns" style="padding-left:10%;padding-right:10%">
    <h2 align="center">2023 Season Calendar</h2>
    <pre>
      Date            Grand Prix              Venue
      ----            ----------              -----
      February 23-25  Pre-season testing      Sakhir
      March 5         Bahrain                 Sakhir
      March 19        Saudi Arabia            Jeddah
      April 2         Australia               Melbourne
      TBC             TBC                     TBC
      April 30        Azerbaijan              Baku (sprint)
      May 7           Miami                   Miami
      May 21          Emilia Romagna          Imola
      May 28          Monaco                  Monaco
      June 4          Spain                   Barcelona
      June 18         Canada                  Montreal
      July 2          Austria                 Spielberg (sprint)
      July 9          United Kingdom          Silverstone
      July 23         Hungary                 Budapest
      July 30         Belgium                 Spa (sprint)
      August 27       Netherlands             Zandvoort
      September 3     Italy                   Monza
      September 17    Singapore               Singapore
      September 24    Japan                   Suzuka
      October 8       Qatar                   Lusail (sprint)
      October 22      USA                     Austin (sprint)
      October 29      Mexico                  Mexico City
      November 5      Brazil                  Sao Paulo (sprint)
      November 18     Las Vegas               Las Vegas*
      November 26     Abu Dhabi               Yas Marina
   </pre>
   */}
    </Row>
    </Container>
    </>
  )
}
export default Charlotte
