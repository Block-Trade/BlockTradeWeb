import Web3 from 'web3';
import Trades from '../../abis/Trades.json';

export const getAllConn = () => async dispatch => {
    console.log("In the connections function")
    loadWeb3();
    loadBlockchainData();
}

export const loadWeb3 = async () => {
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

export const loadBlockchainData = () => async dispatch => {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    //this.setState({ account: accounts[0] })

    const getAccount = async () => {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
    };
    getAccount();

    let ethBalance = await web3.eth.getBalance(accounts[0]);
    //this.setState({ ethBalance: ethBalance });

    const abi = Trades.abi;
    const networkId = await web3.eth.net.getId();
    const tradesData = Trades.networks[networkId]
    if (tradesData) {
        const address = tradesData.address
        const trades = new web3.eth.Contract(abi, address)
        dispatch({
            type: 'SET_TRADES_CONTRACT',
            payload: trades
        })
        console.log("Connected to trade");
        window.alert('Trades contract deployed to detected network')

    } else {
        window.alert('Trades contract not deployed to detected network')
    }
}