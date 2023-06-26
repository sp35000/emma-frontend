import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Sig.css'

function Emma() {
  return (
    <>
    <Container fluid>
    <Row>
    <h1>Sites</h1>
    <h2>World</h2>
    <p>
      <Button variant="success" href="https://www.timeanddate.com/" target="_blank">Time and Date</Button>
      <Button variant="success" href="https://5amjoel.com/5am-emails" target="_blank">5 AM</Button>
      <Button variant="success" href="https://theintercept.com/" target="_blank">The Intercept</Button>
      <Button variant="success" href="https://www.sapo.pt/" target="_blank">Sapo</Button>
      <Button variant="success" href="http://portuguese.people.com.cn/" target="_blank">People.cn</Button>
      <Button variant="success" href="https://www.dw.com/pt-002/not%C3%ADcias/s-13918" class="btn btn-lg btn-success"
      target="_blank">Africa</Button>
      <Button variant="success" href="https://www.news.com.au/" class="btn btn-lg btn-success"
      target="_blank">news.com.au</Button>
      <Button variant="success" href="https://br.sputniknews.com/" target="_blank">Sputnik</Button>
      <Button variant="success" href="https://www.indiatimes.com/" class="btn btn-lg btn-success"
      target="_blank">India Times</Button>
      <Button variant="success" href="https://www.swissinfo.ch/por" target="_blank">swissinfo.ch</Button>
      <Button variant="success" href="https://shumian.com.br/" target="_blank">Shūmiàn</Button>
      <Button variant="success" href="https://mundo-nipo.com/" target="_blank">Mundo Nipo</Button>
      <Button variant="success" href="https://www.aljazeera.com/" target="_blank">Al Jazeera</Button>
        <Button variant="success" href="https://br.rbth.com/" target="_blank">Gazeta Russa</Button>
        <Button variant="success" href="https://www.bangkokpost.com/" target="_blank">Bangkok Post</Button>
        <Button variant="success" href="https://www.prensa.com/" target="_blank">Prensa</Button>
        <Button variant="success" href="https://observador.pt/" target="_blank">Observador</Button>
        <Button variant="success" href="https://www.globaltimes.cn/index.html" class="btn btn-lg btn-success"
        target="_blank">GT</Button>
        <Button variant="success" href="https://www.smh.com.au" target="_blank">SMH</Button>
        <Button variant="success" href="https://www3.nhk.or.jp/nhkworld/en/news/" target="_blank">NHK</Button>
        <Button variant="success" href="https://digg.com/" target="_blank">Digg</Button>
        <Button variant="success" href="https://www.painelglobal.com.br" target="_blank">Painel
          Global</Button>
        </p>
        <h2>Brasil</h2>
        <p>

          <Button variant="success" href="https://mapadosconflitos.apublica.org/" target="_blank">Mapa dos conflitos</Button>
          <Button variant="success" href="https://www.vozdascomunidades.com.br/" target="_blank">Voz das Comunidades</Button>
          <Button variant="success" href="https://theintercept.com.br/" target="_blank">The Intercept Brasil</Button>
          <Button variant="success" href="https://www.outraspalavras.net" target="_blank">Outras Palavras</Button>
          <Button variant="success" href="https://www.bbc.com/portuguese" target="_blank">BBC</Button>
          <Button variant="success" href="https://www.vermelho.org.br" target="_blank">Vermelho</Button>
          <Button variant="success" href="https://www.dw.com/pt/not%C3%ADcias/s-7111" class="btn btn-lg btn-success"
          target="_blank">DW</Button>
          <Button variant="success" href="https://www.cartacapital.com.br" target="_blank">Carta
            Capital</Button>
            <Button variant="success" href="https://www.acritica.com/" class="btn btn-lg btn-success"
            target="_blank">A Cr&iacute;tica</Button>
            <Button variant="success" href="https://www.diariodepernambuco.com.br/" class="btn btn-lg btn-success"
            target="_blank">Di&aacute;rio de Pernambuco</Button>
            <Button variant="success" href="https://www.correiobraziliense.com.br/" target="_blank">Correio Braziliense</Button>
            <Button variant="success" href="https://extra.globo.com/" target="_blank">Extra</Button>
            <Button variant="success" href="https://gauchazh.clicrbs.com.br/" target="_blank">Zero Hora</Button>
            <Button variant="success" href="https://www.oliberal.com/" target="_blank">O Liberal</Button>
            <Button variant="success" href="https://portalcorreio.com.br/" target="_blank">O Correio</Button>
            <Button variant="success" href="https://g1.globo.com/" target="_blank">G1</Button>
            <Button variant="success" href="https://diariodonordeste.verdesmares.com.br/" target="_blank">DN</Button>
            <Button variant="success" href="https://www.canalmeio.com.br/ultima-edicao/" target="_blank">Canal Meio</Button>
          </p>

          <h2>Communities</h2>
          <p>
            <Button variant="success" href="https://www.captable.com.br/" target="_blank">CapTable</Button>
            <Button variant="success" href="https://www.startse.com.br/" target="_blank">StartSe</Button>
            <Button variant="success" href="https://reddit.com" target="_blank">Reddit</Button>
            <Button variant="success" href="https://www.indiehackers.com/interviews/page/1" target="_blank">Indie Hackers</Button>
            <Button variant="success" href="https://www.producthunt.com/" target="_blank">Product Hunt</Button>
            <Button variant="success" href="https://medium.com/" target="_blank">Medium</Button>
            <Button variant="success" href="https://www.internations.org/"  target="_blank">InterNations</Button>
            <Button variant="success" href="https://discord.com/app" target="_blank">Discord</Button>
            <Button variant="success" href="https://nomadbase.com/"  target="_blank">Nomadbase</Button>
            <Button variant="success" href="https://www.bastter.com"  target="_blank">Bastter</Button>
            <Button variant="success" href="https://www.expatexchange.com/loginexpatexchange"  target="_blank">Expat Exchange</Button>
            <Button variant="success" href="https://www.linkedin.com"  target="_blank">LinkedIn</Button>
            <Button variant="success" href="https://www.linkedin.com/sales/ssi" target="_blank">SSI</Button>
            <Button variant="success" href="https://bitcointalk.org"  target="_blank">Bitcointalk</Button>
            <Button variant="success" href="https://nodesk.co/articles/" target="_blank">No Desk</Button>
            <Button variant="success" href="https://web.telegram.org/#/login" target="_blank">Telegram</Button>
            <Button variant="success" href="https://forum.earlyretirementextreme.com/" target="_blank">ERE</Button>
          </p>
{/*
          <h2>Finance</h2>

          <div class="frame-container">
            <iframe class="responsive-iframe" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREdJFqdh2z9iss2b73Z3vvNywBhfGecHReDFeyUBL-S_DQMpV_Es76CKIPxa552_mhmmVb9p57B5Xe/pubhtml?gid=1413162259&amp;single=true&amp;widget=true&amp;headers=false" width="800px" height="400px">
              <span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span>
              <span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height:0;"class="mce_SELRES_start">﻿</span>
            </iframe>
          </div>
          <p class="bg-info" align="center"><small>This spreadsheet is a courtesy of <strong>Rommie</strong> blog.</small></p>
  */}
            <h2>Internet</h2>
            <p>
              <Button variant="success" href="https://archive.org/" target="_blank">Archive</Button>
              <Button variant="success" href="https://medium.com/s/story/how-i-fully-quit-google-and-you-can-too-4c2f3f85793a" target="_blank">Alternatives</Button>
              <Button variant="success" href="https://duckduckgo.com" target="_blank">DuckDuckGo</Button>
              <Button variant="success" href="https://metacrawler.com" target="_blank">Metacrawler</Button>
              <Button variant="success" href="https://www.startpage.com/" target="_blank">StartPage</Button>
              <Button variant="success" href="https://curlie.org/" target="_blank">Curlie</Button>
              <Button variant="success" href="https://my.yahoo.com" target="_blank">My Yahoo!</Button>
              <Button variant="success" href="https://web.whatsapp.com/" target="_blank">WhatsApp</Button>
              <Button variant="success" href="https://mail.yahoo.com" target="_blank">yahoo! mail</Button>
              <br/><br/>
              <Button variant="success" href="https://www.google.com" target="_blank">Google</Button>
              <Button variant="success" href="https://www.gmail.com" target="_blank">Gmail</Button>
              <Button variant="success" href="https://www.youtube.com" target="_blank">YouTube</Button>
            </p>
    </Row>
    </Container>
    </>
  )
}
export default Emma
