import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Sig.css'

function Rommie() {
  return (
    <>
    <Container fluid>
    <Row>
                  <h1>Finance</h1>
              <ul id="hlist">
                <li>Banks [<a href="https://www.bancointer.com.br/" target="_blank">Inter</a>|</li>
                <li><a href="http://www.cgd.pt" target="_blank">CGD</a>|</li>
                <li><a href="https://www.multibank.com.pa/" target="_blank">Multibank</a>|</li>
                <li><a href="https://banco.bradesco" target="_blank">Bradesco</a>|</li>
                <li><a href="http://www.cef.gov.br" target="_blank">CEF</a>|</li>
                <li><a href="http://www.bancoreal.com.br" target="_blank">Santander</a>|</li>
                <li><a href="http://www.itau.com.br" target="_blank">Itau</a>|</li>
                <li><a href="http://www.bb.com.br" target="_blank">BB</a>]</li>
                <br />
                <br />
                <li><a href="https://www.investidor.b3.com.br/" target="_blank">B3</a>|</li>
                <li><a href="https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm" target="_blank">Tesouro Direto</a>|</li>
                <li>
                </li><li>Brokers [<a href="https://www.xpi.com.br/" target="_blank">XP</a>|</li>
                <li><a href="https://corretora.clear.com.br/" target="_blank">Clear</a>|</li>
                <li><a href="https://www.btgpactual.com/" target="_blank">BTG Pactual</a>|</li>
                <li><a href="http://www.agorainvest.com.br" target="_blank">Agora</a>|</li>
                <br />
                <li><a href="https://international.schwab.com/" target="_blank">Charles
                    Schwab</a>|</li>
                <li><a href="https://www.avenue.us/en/" target="_blank">Avenue</a>|</li>
                <li><a href="http://swissquote.ch" target="_blank">Swissquote</a>|</li>
                <li><a href="https://www.interactivebrokers.com" target="_blank">IBKR</a>] </li>
                <br />
                <br />
                <li>Metals [<a href="https://investimentos.bb.com.br" target="_blank">BB</a>|</li>
                <li><a href="https://www.kitco.com/market/" target="_blank">Kitco</a>|</li>
                <li><a href="http://www.caroldtvm.com.br/" target="_blank">Carol</a>|</li>
                <li><a href="https://www.parmetal.com.br/" target="_blank">Parmetal</a>|</li>
                <li><a href="https://www.ourominas.com" target="_blank">Ourominas</a>]</li>
                <li>Transfer [<a href="https://www.remessaonline.com.br" target="_blank">Remessa Online</a>|</li>
                <li><a href="https://www.transferwise.com" target="_blank">Wise</a>] </li>
                <br />
                <li>Other [<a href="http://www.crunchbase.com" target="_blank">Crunchbase</a>|</li>
                <li><a href="https://bancodata.com.br/" target="_blank">Bancodata</a>|</li>
                <li><a href="https://www.forbes.com/billionaires" target="_blank">Forbes</a>|</li>
                <li><a href="http://www.sec.gov/edgar/searchedgar/companysearch.html" target="_blank">EDGAR</a>|
                </li>
                <li><a href="http://www.berkshirehathaway.com" target="_blank">Berkshire Hathaway</a>|</li>
                <br />
                <li><a href="https://www.personalcapital.com/" target="_blank">Personal Capital</a>|</li>
                <li><a href="http://www.portalbrasil.net/indices.htm" target="_blank">Indexes</a>|</li>
                <li><a href="http://www.portalbrasil.net/indices_cdi.htm" target="_blank">Interest Rates</a>|
                </li>
                <li><a href="http://www.yahii.com.br/IPCA_Historico.html" target="_blank">IPCA</a>|</li>
                <li><a href="http://www.receita.economia.gov.br" target="_blank">RFB</a>|</li>
                <li><a href="https://www4.bcb.gov.br/pec/taxas/port/ptaxnpesq.asp?frame=1" target="_blank">Bacen</a>|</li>
                <li><a href="https://www3.bcb.gov.br/registrato/">Registrato</a>]</li>
              </ul>
              <p><a href="/sig/rommie/remotework.html" className="btn btn-lg btn-success">Remote Work</a></p>
              <h2><a href="https://abacusliquid.com/best-finance-blogs/" target="_blank">Blogs</a></h2>
              <ul id="hlist">
                <li><a href="https://www.goodfinancialcents.com/" target="_blank">goodfinancialcents</a>|</li>
                <li><a href="https://www.moneyunder30.com/" target="_blank">moneyunder30</a>|</li>
                <li><a href="https://thecollegeinvestor.com/" target="_blank">thecollegeinvestor</a>|</li>
                <li><a href="http://www.getrichslowly.org/" target="_blank">getrichslowly</a>|</li>
                <br />
                <li><a href="https://www.doughroller.net/" target="_blank">doughroller</a>|</li>
                <li><a href="https://www.sidehustlenation.com/" target="_blank">sidehustlenation</a>|</li>
                <li><a href="https://www.listenmoneymatters.com/" target="_blank">listenmoneymatters</a>|</li>
                <li><a href="https://www.whitecoatinvestor.com/" target="_blank">whitecoatinvestor</a>|</li>
                <li><a href="http://affordanything.com/" target="_blank">affordanything</a>|</li>
                <br />
                <li><a href="http://jlcollinsnh.com/" target="_blank">jlcollinsnh</a>|</li>
                <li><a href="http://earlyretirementextreme.com/" target="_blank">earlyretirementextreme</a>|</li>
                <li><a href="https://www.frugalrules.com/" target="_blank">frugalrules</a>|</li>
                <li><a href="https://obliviousinvestor.com/" target="_blank">obliviousinvestor</a>|</li>
                <br />
                <li><a href="https://www.debtroundup.com/" target="_blank">debtroundup</a>|</li>
                <li><a href="https://thefinancebuff.com/" target="_blank">thefinancebuff</a>|</li>
                <li><a href="http://retireby40.org/" target="_blank">retireby40</a>|</li>
                <li><a href="https://everythingfinanceblog.com/" target="_blank">everythingfinanceblog</a>|</li>
                <li><a href="http://www.pocketyourdollars.com/" target="_blank">pocketyourdollars</a>|</li>
                <br />
                <li><a href="https://wealthyaccountant.com/" target="_blank">wealthyaccountant</a>|</li>
                <li><a href="https://millennialmoney.com/" target="_blank">millennialmoney</a>|</li>
                <li><a href="http://www.moneyaftergraduation.com/" target="_blank">moneyaftergraduation</a>|</li>
                <li><a href="https://ournextlife.com/" target="_blank">ournextlife</a>|</li>
                <li><a href="https://couplemoney.com/" target="_blank">couplemoney</a>|</li>
                <br />
                <li><a href="https://www.nerdwallet.com/" target="_blank">Nerd Wallet</a>|</li>
                <li><a href="https://www.infomoney.com.br/" target="_blank">Infomoney</a>|</li>
                <li><a href="http://www.guardiaodomobral.blogspot.com.br" target="_blank">Guardião do Zé Mobral</a>|</li>
                <li><a href="https://www.financialsamurai.com" target="_blank">Financial Samurai</a>] </li>
              </ul>
              <h2>Cryptocurrencies</h2>
              <div id="coinmarketcap-widget-coin-price-block" coins="1839,52,2010,74,2,512,5994" currency="USD" theme="light" transparent="false" show-symbol-logo="false" />
              <p>
                <a href="https://www.coindesk.com/" className="btn btn-lg btn-success" target="_blank">Coindesk</a>
                <a href="https://cointelegraph.com/" className="btn btn-lg btn-success" target="_blank">Cointelegraph</a>
                <a href="https://coinmarketcap.com/" className="btn btn-lg btn-success" target="_blank">CoinMarketCap</a>
              </p>
              <ul id="hlist">
                <li><a href="https://bitcoin.org/" target="_blank">Bitcoin</a>|</li>
                <li><a href="https://ethereum.org" target="_blank">Ethereum</a>&nbsp;[</li>
                <li><a href="https://etherscan.io/gasTracker" target="_blank">Gas Monitor</a>|</li>
                <li><a href="https://etherscan.io/chart/gasprice" target="_blank">Gas Chart</a>]&nbsp;|</li>
                <li><a href="https://wallet.polygon.technology/" target="_blank">Polygon</a>|</li>
                <li><a href="https://opensea.io" target="_blank">OpenSea</a></li>
                <br />
                <li>Exchanges[</li>
                <li><a href="https://poloniex.com/" target="_blank">Poloniex</a>|</li>
                <li><a href="https://bittrex.com/" target="_blank">Bittrex</a>|</li>
                <li><a href="https://www.coinbase.com/" target="_blank">Coinbase</a>|</li>
                <li><a href="https://www.coinbene.com/" target="_blank">Coinbene</a>|</li>
                <li><a href="https://www.binance.com/" target="_blank">Binance</a>|</li>
                <li><a href="http://www.foxbit.com.br" target="_blank">Foxbit</a>|</li>
                <li><a href="https://pt.bitcointoyou.com/" target="_blank">Bitcoin to You</a>|</li>
                <li><a href="https://shapeshift.io/#/coins" target="_blank">Shapeshift</a>] </li>
                <br />
                <li>Wallets[</li>
                <li><a href="http://www.blockchain.com" target="_blank">Blockchain.com</a>|</li>
                <li><a href="https://www.myetherwallet.com/" target="_blank">MyEtherWallet</a>|</li>
                <li><a href="https://electrum.org/" target="_blank">Electrum</a>|</li>
                <li><a href="https://www.exodus.com/" target="_blank">Exodus</a>|</li>
                <li><a href="bitaddress.org.html" target="_blank">BitAdress</a>] </li>
              </ul>
              <br />
              <h2>Real Estate</h2>
              <ul id="hlist">
                <li>World [</li>
                <li><a href="https://www.coldwellbanker.com/" target="_blank">Coldwell Banker</a>|</li>
                <li><a href="https://www.naiglobal.com/" target="_blank">NAI Global</a>]</li>
                <li>Panama [</li>
                <li><a href="https://www.encuentra24.com/" target="_blank">Encuentra24</a>] </li>
                <li>Brasil [</li>
                <li><a href="http://www.zapimoveis.com.br" target="_blank">Zap</a>|</li>
                <li><a href="http://www.olx.com.br/" target="_blank">OLX</a>] </li><br />
                <li>CE [</li>
                <li><a href="https://fzimoveis.com.br/" target="_blank">FZ Imóveis</a>|</li>
                <li><a href="https://www.flatshop.com.br/" target="_blank">Flatshop</a>] </li>
                <li>SP [</li>
                <li><a href="https://www.loft.com.br" target="_blank">Loft</a>|</li>
                <li><a href="https://morar.housi.com.br/" target="_blank">Housi</a>|</li>
                <li><a href="https://www.soflatsnet.com.br/" target="_blank">Só Flats</a>] </li>
              </ul>
              </Row>
              </Container>
              </>
            )
  }
export default Rommie
