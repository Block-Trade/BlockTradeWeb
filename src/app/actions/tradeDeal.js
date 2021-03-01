import axios from 'axios';
import Web3 from 'web3';
import Trades from '../../abis/Trades.json';

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

export const setSellerInfo = (sellerInfo) => async dispatch => {
    dispatch({
        type: 'SET_SELLER_INFO',
        payload: sellerInfo
    });
}

export const setReceiverInfo = (receiverInfo) => async dispatch => {
    dispatch({
        type: 'SET_RECEIVER_INFO',
        payload: receiverInfo
    });
}

export const setLogisticsInfo = (logisticsInfo) => async dispatch => {
    dispatch({
        type: 'SET_LOGISTICS_INFO',
        payload: logisticsInfo
    });
}

export const setDescOfConsign = (descOfConsign) => async dispatch => {
    dispatch({
        type: 'SET_DESC_OF_CONSIGNMENT',
        payload: descOfConsign
    });
}

export const setFinalBill = (finalBill) => async dispatch => {
    dispatch({
        type: 'SET_FINAL_BILL',
        payload: finalBill
    });
}

export const resetDeal = () => async dispatch => {
    dispatch({
        type: 'RESET_DEAL'
    });
}

export const getUserId = () => async dispatch => {
    try {
        const res = await axios.get('/tradeid');
        console.log(res);
        const users = res.data.users;
        dispatch({
            type: 'USER_ID_FETCHED',
            payload: users
        });
    } catch (e) {
        console.log(e);
    }
}

export const filterName = ({ text }) => dispatch => {
    dispatch({
        type: 'FILTER_NAME',
        payload: text
    });
}

export const clearFilter = () => dispatch => {
    dispatch({
        type: 'CLEAR_FILTER'
    });
}

export const setImpId = ({ username }) => dispatch => {
    dispatch({
        type: 'SET_IMP_ID',
        payload: username
    });
}

/*
async loadWeb3 = () => {
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
*/
/*
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

    const abi = Trades.abi;
    const networkId = await web3.eth.net.getId();    
    const tradesData = Trades.networks[networkId]
    if (tradesData) {
        const address = tradesData.address
        const token = new web3.eth.Contract(abi, address)
        

    } else {
        window.alert('Trades contract not deployed to detected network')
    }
}*/

export const finalUpload = ({ data, ipfsData, conn }) => async dispatch => {
    try {
        console.log(conn.trades_contract);

        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await axios.post('/trade', data, {
            headers: headers
        });
        console.log(res);
        // Put data on ipfs from res.data.TradeId
        console.log(res.data.trade1.TradeId);
        console.log(conn.trades_contract.methods);
        console.log(conn.current_account);
        console.log("IPFS starts here");

        var tradeId = res.data.trade1.TradeId;
        //var tId = conn.trades_contracts.method.setTrade(res.data.trade1.TradeId, )
        var x = JSON.stringify(ipfsData['sellerInfo']) + "\n\n" + JSON.stringify(ipfsData['receiverInfo']) + "\n\n" + JSON.stringify(ipfsData['logisticsInfo']) + "\n\n" + JSON.stringify(ipfsData["descOfConsign"]) + "\n\n" + JSON.stringify(ipfsData['finalBill']);

        console.log(x);

        ipfs.add(x, (error, result) => {
            if (error) {
                console.error(error)
                return
            }
            console.log('Ipfs string x result', result)
            conn.trades_contract.methods.setTrade(res.data.trade1.TradeId, result)
                .send({ from: conn.current_account }).on('transactionHash', (hash) => {
                    console.log("Successfull transacation");                    
                })
        })

        //var d = await conn.trades_contract.methods.getTrade(res.data.trade1.TradeId).call();
        console.log("its done... ");

    } catch (e) {

    }
}