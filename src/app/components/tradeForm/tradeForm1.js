import React,{ useState,useEffect } from 'react';
import { setSellerInfo } from '../../actions/tradeDeal';
import { connect } from 'react-redux';

const TradeForm1 = ({history,setSellerInfo}) => {
    const [sellerFirm, setSellerFirm] = useState("");
    const [invoiceNo, setInvoiceNo] = useState("");
    const [invoiceDate,setInvoiceDate] = useState("");
    const [invoiceDue,setInvoiceDue] = useState("");
    const [sellerAddr,setSellerAddr] = useState("");
    const [purposeShip,setPurposeShip] = useState("");
    const [party,setParty] = useState("");
    const [sellerCont,setSellerCont] = useState("");
    const [sellerTel,setSellerTel] = useState("");
    const [sellerEmail,setSellerEmail] = useState("");

    const nextForm = (e) => {
        e.preventDefault();
        const sellerInfo = {
            sellerFirm,
            invoiceNo,
            invoiceDate,
            invoiceDue,
            sellerAddr,
            purposeShip,
            party,
            sellerCont,
            sellerTel,
            sellerEmail
        };
        setSellerInfo(sellerInfo);
        console.log(sellerInfo);
        history.push('/tradeform2');
    }

    return (
        <div className="container">
        <h3>Seller Information</h3>
            <form>
                <div className="input-field">
                    <label htmlFor="sellerFirm">Seller Firm {" "}</label>
                    <input type="text" name="sellerFirm" id="sellerFirm" value={sellerFirm} onChange={(e) => setSellerFirm(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="invoiceNo">Invoice Number {" "}</label>
                    <input type="text" name="invoiceNo" id="invoiceNo" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="invoiceDate">Invoice Date {" "}</label>
                    <input type="date" name="invoiceDate" id="invoiceDate" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="invoiceDue">Invoice Due {" "}</label>
                    <input type="date" name="invoiceDue" id="invoiceDue" value={invoiceDue} onChange={(e) => setInvoiceDue(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerAddr">Seller Address {" "}</label>
                    <textarea id="sellerAddr" name="sellerAddr" value={sellerAddr} onChange={(e) => setSellerAddr(e.target.value)}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="purposeShip">Purpose of Shipment {" "}</label>
                    <input type="text" name="purposeShip" id="purposeShip" value={purposeShip} onChange={(e) => setPurposeShip(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="party">Party to transaction {" "}</label>
                    <input type="text" name="party" id="party" value={party} onChange={(e) => setParty(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerCont">Seller Contact {" "}</label>
                    <input type="text" name="sellerCont" id="sellerCont" value={sellerCont} onChange={(e) => setSellerCont(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerTel">Seller Telephone {" "}</label>
                    <input type="text" name="sellerTel" id="sellerTel" value={sellerTel} onChange={(e) => setSellerTel(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerEmail">Seller Email {" "}</label>
                    <input type="email" name="sellerEmail" id="sellerEmail" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} />
                </div>
                <button onClick={nextForm} className="btn-floating blue right">Next</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setSellerInfo: (sellerInfo) => dispatch(setSellerInfo(sellerInfo))
});

export default connect(null,mapDispatchToProps)(TradeForm1);