import React, { Component } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import { Settings } from '@material-ui/icons';
import Token from '../../../abis/BT_Token.json';
import TokenExchange from '../../../abis/TokenExchange.json';
import Payment from '../../../abis/Payment.json';
import Web3 from 'web3';
import Main from './Main';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';
//Get balance, wallet address, blocked amount, token exchange

class MyWallet extends Component {

  constructor(props) {
      super(props)

      this.state = {
          ipfsHash: '',
          web3: null,
          buffer: null,
          account: null,
          dealer1: null,
          dealer2: null,
          trade: null,
          sanctioned: false,
          trade: null,
          token: null,
          tokenBalance: 0,
          loading: true,
          tokenExchange: {},
          payment: 0,
          blocked: 0
      }
  }

  async componentWillMount() {
      await this.loadWeb3()
      await this.loadBlockchainData()
  }

  async loadBlockchainData() {
      const web3 = window.web3

      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })

      const getAccount = async () => {
          const accounts = await web3.eth.getAccounts();
          console.log(accounts);
      };
      getAccount();

      let ethBalance = await web3.eth.getBalance(accounts[0]);
      this.setState({ ethBalance: ethBalance });

      //Load Token
      const abi = Token.abi;
      const networkId = await web3.eth.net.getId();//returns 5777 for ganache    
      const tokenData = Token.networks[networkId]
      if (tokenData) {
          const address = tokenData.address
          const token = new web3.eth.Contract(abi, address)
          this.setState({ token: token })

          let tokenBalance = await token.methods.balanceOf(this.state.account).call()
          this.setState({ tokenBalance: tokenBalance.toString() })
      } else {
          window.alert('BT_Token contract not deployed to detected network')
      }

      //Load TokenExchange
      const abi2 = TokenExchange.abi;
      const tokenExchangeData = TokenExchange.networks[networkId]
      if (tokenExchangeData) {
          const address = tokenExchangeData.address
          const tokenExchange = new web3.eth.Contract(abi2, address)
          this.setState({ tokenExchange: tokenExchange })
      } else {
          window.alert('TokenExchange contract not deployed to detected network');
      }

      //Load Payment
      const abi3 = Payment.abi;
      const paymentData = Payment.networks[networkId]
      if (paymentData) {
          const address = paymentData.address
          const payment = new web3.eth.Contract(abi3, address)
          this.setState({ payment: payment })

          const blocked = await payment.methods.amountBlocked(this.state.account).call();
          this.setState({ blocked: blocked.toString() });
      } else {
          window.alert('Payment contract not deployed to detected network')
      }

      this.setState({ loading: false })
  }


  async loadWeb3() {
      if (window.web3) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable();
      }
      else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
      }
      else {
          window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
  }

  buyTokens = (etherAmount) => {
      this.setState({ loading: true })
      this.state.tokenExchange.methods.buyTokens()
          .send({ value: etherAmount, from: this.state.account })
          .on('transactionHash', (hash) => {
              this.setState({ loading: false })
          })
      console.log('after buying tokens')
  }

  sellTokens = (tokenAmount) => {
      this.setState({ loading: true })
      this.state.token.methods.approve(this.state.tokenExchange.address, tokenAmount).send({ from: this.state.account }).on('transactionHash', (hash) => {
          this.state.tokenExchange.methods.sellTokens(tokenAmount)
              .send({ from: this.state.account })
              .on('transactionHash', (hash) => {
                  this.setState({ loading: false })
              })
      })
  }

  render() {

      let content
      if (this.state.loading) {
          content = <a id="loader" className="text-center">Loading...</a>
      } else {
          content = <Main
              ethBalance={this.state.ethBalance}
              tokenBalance={this.state.tokenBalance}
              buyTokens={this.buyTokens}
              sellTokens={this.sellTokens}
          />
      }
      return (

          <div>
              <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                  <p>
                      BlockTrade
                  </p>
              </nav>
              <div className="container-fluid mt-5">
                  <div className="row">
                      <main role="main" className="col-lg-12 d-flex text-center">
                          <div className="content mr-auto ml-auto">
                              <h1>BlockTrade - Wallet Page</h1>
                              <br></br>
                              <br></br>
                              <h3>The balance is  : {window.web3.utils.fromWei(this.state.tokenBalance.toString(), 'Ether')}</h3>
                              <br></br>
                              <br></br>
                              <h4>You cannot spend the blocked amount as it has been reserved for ongoing trade transactions</h4>
                              <br></br>
                              <br></br>
                              <h3>Blocked Amount: {window.web3.utils.fromWei(this.state.blocked.toString(), 'Ether')}</h3>

                          </div>
                          <div>
                              {content}
                          </div>
                      </main>
                  </div>
              </div>
          </div>
      );
  }
}

export default MyWallet;
