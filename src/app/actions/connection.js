import Trades from '../../abis/Trades.json';
import Web3 from 'web3';

export const getAllConn = () => async (dispatch) => {
  await loadWeb3();

  const web3 = window.web3;

  const accounts = await web3.eth.getAccounts();
  //this.setState({ account: accounts[0] });
  console.log(accounts[0]);
  dispatch({
    type: 'SET_ACCOUNT',
    payload: accounts[0],
  });

  let ethBalance = await web3.eth.getBalance(accounts[0]);
  //this.setState({ ethBalance: ethBalance });
  console.log(ethBalance);

  const abi = Trades.abi;
  const networkId = await web3.eth.net.getId();
  const tradesData = Trades.networks[networkId];
  if (tradesData) {
    window.alert("Trades Contract deployed to detected network");
    const address = "0x420751D1753cD4D76fce378d290B5a647806C56D";
    const trades = new web3.eth.Contract(abi, address)
    console.log(trades.methods.setTrade);
    dispatch({
      type: 'SET_TRADES_CONTRACT',
      payload: trades,
    });
  } else {
    // window.alert('Trades contract not deployed to detected network')
  }

  //loadBlockchainData();
};

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    console.log('window.web3');
    await window.ethereum.enable();
  } else if (window.web3) {
    console.log('window.web3//');
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    );
  }
};

/*
export const loadBlockchainData = () => async (dispatch) => {
  const web3 = window.web3;

  const accounts = await web3.eth.getAccounts();
  //this.setState({ account: accounts[0] });
  console.log(accounts[0]);

  let ethBalance = await web3.eth.getBalance(accounts[0]);
  //this.setState({ ethBalance: ethBalance });
  console.log(ethBalance);

  const abi = Trades.abi;
  const networkId = await web3.eth.net.getId();
  const tradesData = Trades.networks[networkId]
  if (tradesData) {
    window.alert("Trades Contract deployed to detected network");
    const address = tradesData.address
    const trades = new web3.eth.Contract(abi, address)
    console.log(trades);
    dispatch({
      type: 'SET_TRADES_CONTRACT',
      payload: trades
    })
  } else {
    window.alert('Trades contract not deployed to detected network')
  }
};
*/
