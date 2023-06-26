import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Sig.css'

function Finn() {
  return (
    <>
    <Container fluid>
    <Row>
    <Button variant="success" href="https://www.melhoresdestinos.com.br/" target="_blank">Melhores Destinos</Button>
    <ul id="hlist">
    <li><a href="https://weather.com/" target="_blank">Weather</a>|</li>
    <li><a href="http://www.numbeo.com" target="_blank">Numbeo</a>|</li>
    <li><a href="https://seguroviagempro.com.br" target="_blank">Seguro Viagem Pro</a>|</li>
    <li><a href="https://www.segurospromo.com.br" target="_blank">Seguros Promo</a>|</li>
    <li><a href="http://www.xe.com" target="_blank">XE</a>|</li>
    <li><a href="https://translate.google.com" target="_blank">Translate</a>|</li>
    <li><a href="https://maps.google.com" target="_blank">Maps</a></li>
    <br />
    <li>Hosting [<a href="http://www.booking.com" target="_blank">Booking</a>|</li>
    <li><a href="https://www.airbnb.com/" target="_blank">AirBnb</a>]&nbsp;</li>
    <li>Miles [</li>
    <li><a href="https://milestalk.com/" target="_blank">MilesTalk</a>|</li>
    <li><a href="http://dotz.com.br/" target="_blank">Dotz</a>|</li>
    <li><a href="https://www.esfera.com.vc/" target="_blank">Esfera</a>|</li>
    <li><a href="https://www.livelo.com.br/" target="_blank">Livelo</a>|</li>
    <li><a href="http://www.smiles.com.br" target="_blank">Smiles</a>] </li>
    <br />
    <li>Transport [<a href="https://www.omio.com/" target="_blank">Omio</a>|</li>
    <li><a href="http://www.voeazul.com.br" target="_blank">Azul</a>|</li>
    <li><a href="http://www.tam.com.br" target="_blank">TAM</a>|</li>
  <li><a href="https://www.buson.com.br/" target="_blank">Buson</a>|</li>
  <li><a href="https://www.clickbus.com.br/" target="_blank">Clickbus</a>|</li>
    <li><a href="http://www.flytap.com" target="_blank">TAP</a>|</li>
    <li><a href="https://www.easyjet.com/en/" target="_blank">easyJet</a>|</li>
    <li><a href="http://www.delta.com" target="_blank">Delta</a>|</li>
    <li><a href="http://www.copaair.com" target="_blank">Copa</a>|</li>
    <li><a href="http://www.voegol.com.br" target="_blank">Gol</a>] </li>
  </ul>

  <h2>World</h2>
  <ul id="hlist">
    <li>[<a href="https://www.360meridianos.com/" target="_blank">360 meridianos</a>|</li>
    <li><a href="https://www.lonelyplanet.com/" target="_blank">Lonely Planet</a>|</li>
    <li><a href="https://www.frommers.com/" target="_blank">Frommer's</a>|</li>
    <li><a href="https://www.fodors.com/" target="_blank">Fodors</a>|</li>
    <li><a href="https://www.worldtravelguide.net/" target="_blank">World Travel Guide</a>|</li>
    <li><a href="https://www.tripadvisor.com" target="_blank">Trip Advisor</a>|</li>
    <br/>
    <li><a href="https://www.escapeartist.com/" target="_blank">Escape Artist</a>|</li>
    <li><a href="https://culturecrossing.net/" target="_blank">Culture Crossing</a>|</li>
    <li><a href="http://www.cyborlink.com/" target="_blank">Cyborlink</a>|</li>
    <li><a href="http://mundosemfim.com/" target="_blank">Mundo sem fim</a>|</li>
    <li><a href="https://www.traveller.com.au/los-angeles" target="_blank">L.A.</a></li>
    <br/>
    <li>Visa [<a href="https://www.projectvisa.com/" target="_blank">Project Visa</a>|</li>
    <li><a href="https://visalink.com.au/" target="_blank">Visa Link</a>|</li>
    <li><a href="https://www.visahunter.com/" target="_blank">Visa Hunter</a>|</li>
    <li><a href="https://www.sovereignman.com/" target="_blank">Sorveignman</a>]</li>
  </ul>

  <h2>Brasil</h2>
  <ul id="hlist">
  <li><a href="https://vivamanaus.com/" target="_blank">Viva Manaus</a>|</li>
  <li>Salvador [<a href="https://www.ccrmetrobahia.com.br/" target="_blank">Metrô</a>|</li>
  <li><a href="https://www.salvadorcard.com.br/" target="_blank">Salvador Card</a>]</li>
  <li><a href="https://www.cbtu.gov.br/index.php/pt/recife/" target="_blank">Metrô Recife</a>|</li>
  <li><a href="https://www.metrorio.com.br/" target="_blank">Metrô RJ</a></li>
  <br/>
  <li>SP [<a href="http://www.metro.sp.gov.br/" target="_blank">Metrô</a>|</li>
  <li><a href="https://www.sptrans.com.br/" target="_blank">SPTrans</a>] </li>
  <li>Fortaleza [<a href="http://www.metrofor.ce.gov.br/" target="_blank">Metrô</a>| </li>
  <li><a href="https://www.vtefortaleza.com.br/" target="_blank">VTE</a>]</li>
  </ul>

  <h2>Panama</h2>
  <ul id="hlist">
    <li><a href="https://bookstore.liveandinvestoverseas.com/sub/panama-letter/video/v2/"
    target="_blank">The Real Panam&aacute;</a>|</li>
    <li><a href="https://www.migracion.gob.pa" target="_blank">Migraci&oacute;n</a>|</li>
    <li><a href="http://panamalawyermayralamboglia.com/" target="_blank">Mayra Lamboglia</a></li>
    <br/>
    <li><a href="https://www.cascoviejo.org" target="_blank">Casco Viejo</a>|</li>
    <li><a href="https://www.degustapanama.com" target="_blank">Degusta</a>|</li>
    <li><a href="https://www.cinespanama.com" target="_blank">CinesPanama</a></li>
  </ul>

  <h2>Europe</h2>
  <ul id="hlist">
    <li><a href="https://www.eurodicas.com.br/" target="_blank">Eurodicas</a>|</li>
    <li><a href="https://e-resident.gov.ee/" target="_blank">Estonia e-residency</a>|</li>
    <li><a href="https://www.visitberlin.de/en" target="_blank">Visit Berlin</a>|</li>
    <li><a href="https://www.bvg.de/en" target="_blank">BVG</a></li>
    <br/>
    <li><a href="https://www.cp.pt/" target="_blank">Comboios de Portugal</a>|</li>
    <li><a href="https://www.sncf.com/en" target="_blank">SNCF</a>|</li>
    <li><a href="https://www.monte-carlo.mc/en/tourism/" target="_blank">Tourism in Monaco</a>|</li>
    <li><a href="https://www.visitmonaco.com/en" target="_blank">Visit Monaco</a></li>

  </ul>

  <h2>Asia</h2>
  <ul id="hlist">
    <li>China e-commerce [<a href="https://br.banggood.com" target="_blank">Banggood</a>|</li>
    <li><a href="https://br.gearbest.com" target="_blank">Gearbest</a>|</li>
    <li><a href="https://www.dx.com" target="_blank">Deal Extreme</a>|</li>
    <li><a href="https://pt.aliexpress.com" target="_blank">Ali Express</a>] </li>
    </ul>

    </Row>
    </Container>
    </>
  )
}
export default Finn
