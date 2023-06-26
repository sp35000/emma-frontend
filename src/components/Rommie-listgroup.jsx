import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Rommie() {
  return (
    <>
    <Container fluid>
    <Row>
    <Col>
    <h1>Finance</h1>
    <ListGroup horizontal className="my-2">
    <ListGroup.Item>Banks [<a href="https://www.bancointer.com.br/" target="_blank">Inter</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.cgd.pt" target="_blank">CGD</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.multibank.com.pa/" target="_blank">Multibank</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://banco.bradesco" target="_blank">Bradesco</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.cef.gov.br" target="_blank">CEF</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.bancoreal.com.br" target="_blank">Santander</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.itau.com.br" target="_blank">Itau</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.bb.com.br" target="_blank">BB</a>]</ListGroup.Item>


    <ListGroup.Item><a href="https://www.investidor.b3.com.br/" target="_blank">B3</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm" target="_blank">Tesouro Direto</a>|</ListGroup.Item>
    <ListGroup.Item>
    </ListGroup.Item><ListGroup.Item>Brokers [<a href="https://www.xpi.com.br/" target="_blank">XP</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://corretora.clear.com.br/" target="_blank">Clear</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.btgpactual.com/" target="_blank">BTG Pactual</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.agorainvest.com.br" target="_blank">Agora</a>|</ListGroup.Item>

    <ListGroup.Item><a href="https://international.schwab.com/" target="_blank">Charles
    Schwab</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.avenue.us/en/" target="_blank">Avenue</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://swissquote.ch" target="_blank">Swissquote</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.interactivebrokers.com" target="_blank">IBKR</a>] </ListGroup.Item>


    <ListGroup.Item>Metals [<a href="https://investimentos.bb.com.br" target="_blank">BB</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.kitco.com/market/" target="_blank">Kitco</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.caroldtvm.com.br/" target="_blank">Carol</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.parmetal.com.br/" target="_blank">Parmetal</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.ourominas.com" target="_blank">Ourominas</a>]</ListGroup.Item>
    <ListGroup.Item>Transfer [<a href="https://www.remessaonline.com.br" target="_blank">Remessa Online</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.transferwise.com" target="_blank">Wise</a>] </ListGroup.Item>

    <ListGroup.Item>Other [<a href="http://www.crunchbase.com" target="_blank">Crunchbase</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://bancodata.com.br/" target="_blank">Bancodata</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.forbes.com/billionaires" target="_blank">Forbes</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.sec.gov/edgar/searchedgar/companysearch.html" target="_blank">EDGAR</a>|
    </ListGroup.Item>
    <ListGroup.Item><a href="http://www.berkshirehathaway.com" target="_blank">Berkshire Hathaway</a>|</ListGroup.Item>

    <ListGroup.Item><a href="https://www.personalcapital.com/" target="_blank">Personal Capital</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.portalbrasil.net/indices.htm" target="_blank">Indexes</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.portalbrasil.net/indices_cdi.htm" target="_blank">Interest Rates</a>|
    </ListGroup.Item>
    <ListGroup.Item><a href="http://www.yahii.com.br/IPCA_Historico.html" target="_blank">IPCA</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.receita.economia.gov.br" target="_blank">RFB</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www4.bcb.gov.br/pec/taxas/port/ptaxnpesq.asp?frame=1" target="_blank">Bacen</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www3.bcb.gov.br/registrato/">Registrato</a>]</ListGroup.Item>

    <p><a href="remotework.html" className="btn btn-lg btn-success">Remote Work</a></p>
    <h2><a href="https://abacusliquid.com/best-finance-blogs/" target="_blank">Blogs</a></h2>

    <ListGroup.Item><a href="https://www.goodfinancialcents.com/" target="_blank">goodfinancialcents</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.moneyunder30.com/" target="_blank">moneyunder30</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://thecollegeinvestor.com/" target="_blank">thecollegeinvestor</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.getrichslowly.org/" target="_blank">getrichslowly</a>|</ListGroup.Item>

    <ListGroup.Item><a href="https://www.doughroller.net/" target="_blank">doughroller</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.sidehustlenation.com/" target="_blank">sidehustlenation</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.listenmoneymatters.com/" target="_blank">listenmoneymatters</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.whitecoatinvestor.com/" target="_blank">whitecoatinvestor</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://affordanything.com/" target="_blank">affordanything</a>|</ListGroup.Item>

    <ListGroup.Item><a href="http://jlcollinsnh.com/" target="_blank">jlcollinsnh</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://earlyretirementextreme.com/" target="_blank">earlyretirementextreme</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.frugalrules.com/" target="_blank">frugalrules</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://obliviousinvestor.com/" target="_blank">obliviousinvestor</a>|</ListGroup.Item>

    <ListGroup.Item><a href="https://www.debtroundup.com/" target="_blank">debtroundup</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://thefinancebuff.com/" target="_blank">thefinancebuff</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://retireby40.org/" target="_blank">retireby40</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://everythingfinanceblog.com/" target="_blank">everythingfinanceblog</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.pocketyourdollars.com/" target="_blank">pocketyourdollars</a>|</ListGroup.Item>

    <ListGroup.Item><a href="https://wealthyaccountant.com/" target="_blank">wealthyaccountant</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://millennialmoney.com/" target="_blank">millennialmoney</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.moneyaftergraduation.com/" target="_blank">moneyaftergraduation</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://ournextlife.com/" target="_blank">ournextlife</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://couplemoney.com/" target="_blank">couplemoney</a>|</ListGroup.Item>

    <ListGroup.Item><a href="https://www.nerdwallet.com/" target="_blank">Nerd Wallet</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.infomoney.com.br/" target="_blank">Infomoney</a>|</ListGroup.Item>
    <ListGroup.Item><a href="http://www.guardiaodomobral.blogspot.com.br" target="_blank">Guardião do Zé Mobral</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://www.financialsamurai.com" target="_blank">Financial Samurai</a>] </ListGroup.Item>

    <h2>Cryptocurrencies</h2>
    {/*
    <div id="coinmarketcap-widget-coin-price-block" coins="1839,52,2010,74,2,512,5994" currency="USD" theme="light" transparent="false" show-symbol-logo="false" />
    <p>
    <a href="https://www.coindesk.com/" className="btn btn-lg btn-success" target="_blank">Coindesk</a>
    <a href="https://cointelegraph.com/" className="btn btn-lg btn-success" target="_blank">Cointelegraph</a>
    <a href="https://coinmarketcap.com/" className="btn btn-lg btn-success" target="_blank">CoinMarketCap</a>
    </p>
    */}

    <ListGroup.Item><a href="https://bitcoin.org/" target="_blank">Bitcoin</a>|</ListGroup.Item>
    <ListGroup.Item><a href="https://ethereum.org" target="_blank">Ethereum</a>&nbsp;[</ListGroup.Item>
      <ListGroup.Item><a href="https://etherscan.io/gasTracker" target="_blank">Gas Monitor</a>|</ListGroup.Item>
      <ListGroup.Item><a href="https://etherscan.io/chart/gasprice" target="_blank">Gas Chart</a>]&nbsp;|</ListGroup.Item>
      <ListGroup.Item><a href="https://wallet.polygon.technology/" target="_blank">Polygon</a>|</ListGroup.Item>
      <ListGroup.Item><a href="https://opensea.io" target="_blank">OpenSea</a></ListGroup.Item>

      <ListGroup.Item>Exchanges[</ListGroup.Item>
        <ListGroup.Item><a href="https://poloniex.com/" target="_blank">Poloniex</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://bittrex.com/" target="_blank">Bittrex</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.coinbase.com/" target="_blank">Coinbase</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.coinbene.com/" target="_blank">Coinbene</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.binance.com/" target="_blank">Binance</a>|</ListGroup.Item>
        <ListGroup.Item><a href="http://www.foxbit.com.br" target="_blank">Foxbit</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://pt.bitcointoyou.com/" target="_blank">Bitcoin to You</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://shapeshift.io/#/coins" target="_blank">Shapeshift</a>] </ListGroup.Item>

        <ListGroup.Item>Wallets[</ListGroup.Item>
        <ListGroup.Item><a href="http://www.blockchain.com" target="_blank">Blockchain.com</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.myetherwallet.com/" target="_blank">MyEtherWallet</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://electrum.org/" target="_blank">Electrum</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.exodus.com/" target="_blank">Exodus</a>|</ListGroup.Item>
        <ListGroup.Item><a href="bitaddress.org.html" target="_blank">BitAdress</a>] </ListGroup.Item>

        <h2>Real Estate</h2>
        <ListGroup.Item>World [</ListGroup.Item>
        <ListGroup.Item><a href="https://www.coldwellbanker.com/" target="_blank">Coldwell Banker</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.naiglobal.com/" target="_blank">NAI Global</a>]</ListGroup.Item>
        <ListGroup.Item>Panama [</ListGroup.Item>
        <ListGroup.Item><a href="https://www.encuentra24.com/" target="_blank">Encuentra24</a>] </ListGroup.Item>
        <ListGroup.Item>Brasil [</ListGroup.Item>
        <ListGroup.Item><a href="http://www.zapimoveis.com.br" target="_blank">Zap</a>|</ListGroup.Item>
        <ListGroup.Item><a href="http://www.olx.com.br/" target="_blank">OLX</a>] </ListGroup.Item>
        <ListGroup.Item>CE [</ListGroup.Item>
        <ListGroup.Item><a href="https://fzimoveis.com.br/" target="_blank">FZ Imóveis</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.flatshop.com.br/" target="_blank">Flatshop</a>] </ListGroup.Item>
        <ListGroup.Item>SP [</ListGroup.Item>
        <ListGroup.Item><a href="https://www.loft.com.br" target="_blank">Loft</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://morar.housi.com.br/" target="_blank">Housi</a>|</ListGroup.Item>
        <ListGroup.Item><a href="https://www.soflatsnet.com.br/" target="_blank">Só Flats</a>] </ListGroup.Item>
      </ListGroup>
      </Col>
      </Row>
    </Container>
    </>
  )
}
export default Rommie
