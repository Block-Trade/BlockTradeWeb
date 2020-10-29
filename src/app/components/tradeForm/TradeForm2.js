import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { setReceiverInfo } from '../../actions/tradeDeal';

const TradeForm2 = ({history,setReceiverInfo, tradeDeal}) => {
    const [receiverFirm, setReceiverFirm] = useState("");
    const [receiverAddr,setReceiverAddr] = useState("");
    const [receiverCont,setReceiverCont] = useState("");
    const [receiverTel,setReceiverTel] = useState("");
    const [receiverEmail,setReceiverEmail] = useState("");
    const [dutyPay,setDutyPay] = useState("");
    const [payMeth,setPayMeth] = useState("");
    const [incurr,setIncurr] = useState("");
    const [inco,setInco] = useState("");

    useEffect(() => {
        const { receiverInfo } = tradeDeal;
        if(receiverInfo){
            setReceiverFirm(receiverInfo.receiverFirm);
            setReceiverAddr(receiverInfo.receiverAddr);
            setReceiverCont(receiverInfo.receiverCont);
            setReceiverTel(receiverInfo.receiverTel);
            setReceiverEmail(receiverInfo.receiverTel);
            setDutyPay(receiverInfo.dutyPay);
            setPayMeth(receiverInfo.payMeth);
            setInco(receiverInfo.inco);
            setIncurr(receiverInfo.incurr);
        }
    },[]);

    const nextForm = (e) => {
        e.preventDefault();
        const receiverInfo = {
            receiverFirm,
            receiverAddr,
            receiverCont,
            receiverTel,
            receiverEmail,
            dutyPay,
            payMeth,
            incurr,
            inco
        };
        console.log(receiverInfo);
        setReceiverInfo(receiverInfo);
        //history.push('/tradeform3');
    }
    return (
        <div className="container">
        <h3>Receiver/Consignee Information</h3>
            <form>
                <div className="input-field">
                    <label htmlFor="receiverFirm">Receiver Firm {" "}</label>
                    <input type="text" name="receiverFirm" id="receiverFirm" value={receiverFirm} onChange={(e) => setReceiverFirm(e.target.value)} />
                </div>
                
                <div className="input-field">
                    <label htmlFor="receiverAddr">Receiver Address {" "}</label>
                    <textarea id="receiverAddr" name="receiverAddr" value={receiverAddr} onChange={(e) => setReceiverAddr(e.target.value)}></textarea>
                </div>
                
                <div className="input-field">
                    <label htmlFor="receiverCont">Receiver Contact {" "}</label>
                    <input type="text" name="receiverCont" id="receiverCont" value={receiverCont} onChange={(e) => setReceiverCont(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="receiverTel">Receiver Telephone {" "}</label>
                    <input type="text" name="receiverTel" id="receiverTel" value={receiverTel} onChange={(e) => setReceiverTel(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="receiverEmail">Receiver Email {" "}</label>
                    <input type="email" name="receiverEmail" id="receiverEmail" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} />
                </div>
                <div class="input-field">
                    <select value={dutyPay} onChange={(e) => setDutyPay(e.target.value)}>
                        <option value="" disabled selected>Taxes and duty payable by</option>
                        <option value="exporter">Exporter</option>
                        <option value="importer">Importer</option>
                    </select>
                </div>
                <div className="input-field col s6">
                    <select value={payMeth} onChange={(e) => setPayMeth(e.target.value)}>
                    <option value="" disabled selected>Payment Method</option>
                        <option value="adtk">Advanced Tokens</option>
                        <option value="asse">Assets</option>
                    </select>
                </div>
                <div className="input-field col s6">
                <select name="incurr" value={incurr} onChange={(e) => setIncurr(e.target.value)}>
                <option value="" disabled selected>Invoice Currency</option>
                <option value="USD" selected="selected">United States Dollars</option>
                <option value="EUR">Euro</option>
                <option value="GBP">United Kingdom Pounds</option>
                <option value="DZD">Algeria Dinars</option>
                <option value="ARP">Argentina Pesos</option>
                <option value="AUD">Australia Dollars</option>
                <option value="ATS">Austria Schillings</option>
                <option value="BSD">Bahamas Dollars</option>
                <option value="BBD">Barbados Dollars</option>
                <option value="BEF">Belgium Francs</option>
                <option value="BMD">Bermuda Dollars</option>
                <option value="BRR">Brazil Real</option>
                <option value="BGL">Bulgaria Lev</option>
                <option value="CAD">Canada Dollars</option>
                <option value="CLP">Chile Pesos</option>
                <option value="CNY">China Yuan Renmimbi</option>
                <option value="CYP">Cyprus Pounds</option>
                <option value="CSK">Czech Republic Koruna</option>
                <option value="DKK">Denmark Kroner</option>
                <option value="NLG">Dutch Guilders</option>
                <option value="XCD">Eastern Caribbean Dollars</option>
                <option value="EGP">Egypt Pounds</option>
                <option value="FJD">Fiji Dollars</option>
                <option value="FIM">Finland Markka</option>
                <option value="FRF">France Francs</option>
                <option value="DEM">Germany Deutsche Marks</option>
                <option value="XAU">Gold Ounces</option>
                <option value="GRD">Greece Drachmas</option>
                <option value="HKD">Hong Kong Dollars</option>
                <option value="HUF">Hungary Forint</option>
                <option value="ISK">Iceland Krona</option>
                <option value="INR">India Rupees</option>
                <option value="IDR">Indonesia Rupiah</option>
                <option value="IEP">Ireland Punt</option>
                <option value="ILS">Israel New Shekels</option>
                <option value="ITL">Italy Lira</option>
                <option value="JMD">Jamaica Dollars</option>
                <option value="JPY">Japan Yen</option>
                <option value="JOD">Jordan Dinar</option>
                <option value="KRW">Korea (South) Won</option>
                <option value="LBP">Lebanon Pounds</option>
                <option value="LUF">Luxembourg Francs</option>
                <option value="MYR">Malaysia Ringgit</option>
                <option value="MXP">Mexico Pesos</option>
                <option value="NLG">Netherlands Guilders</option>
                <option value="NZD">New Zealand Dollars</option>
                <option value="NOK">Norway Kroner</option>
                <option value="PKR">Pakistan Rupees</option>
                <option value="XPD">Palladium Ounces</option>
                <option value="PHP">Philippines Pesos</option>
                <option value="XPT">Platinum Ounces</option>
                <option value="PLZ">Poland Zloty</option>
                <option value="PTE">Portugal Escudo</option>
                <option value="ROL">Romania Leu</option>
                <option value="RUR">Russia Rubles</option>
                <option value="SAR">Saudi Arabia Riyal</option>
                <option value="XAG">Silver Ounces</option>
                <option value="SGD">Singapore Dollars</option>
                <option value="SKK">Slovakia Koruna</option>
                <option value="ZAR">South Africa Rand</option>
                <option value="KRW">South Korea Won</option>
                <option value="ESP">Spain Pesetas</option>
                <option value="XDR">Special Drawing Right (IMF)</option>
                <option value="SDD">Sudan Dinar</option>
                <option value="SEK">Sweden Krona</option>
                <option value="CHF">Switzerland Francs</option>
                <option value="TWD">Taiwan Dollars</option>
                <option value="THB">Thailand Baht</option>
                <option value="TTD">Trinidad and Tobago Dollars</option>
                <option value="TRL">Turkey Lira</option>
                <option value="VEB">Venezuela Bolivar</option>
                <option value="ZMK">Zambia Kwacha</option>
                <option value="EUR">Euro</option>
                <option value="XCD">Eastern Caribbean Dollars</option>
                <option value="XDR">Special Drawing Right (IMF)</option>
                <option value="XAG">Silver Ounces</option>
                <option value="XAU">Gold Ounces</option>
                <option value="XPD">Palladium Ounces</option>
                <option value="XPT">Platinum Ounces</option>
            </select>
                </div>
                <div className="input-field col s12">
                    <select value={inco} onChange={(e) => setInco(e.target.value)}>
                    <option value="" disabled selected>IncoTerms</option>
                        <option value="EXW">EXW - EX WORKS</option>
                        <option value="FCA">FCA - FREE CARRIER</option>
                        <option value="FAS">FAS - FREE ALONGSIDE SHIP</option>
                        <option value="FOB">FOB - FREE ON BOARD</option>
                        <option value="CFR">CFR - COST AND FREIGHT</option>
                        <option value="CIF">CIF - COST, INSURANCE AND FREIGHT</option>
                        <option value="CPT">CPT - CARRIAGE PAID TO</option>
                        <option value="CIP">CIP - CARRIAGE AND INSURANCE PAID TO</option>
                        <option value="DAF">DAF - DELIVERED AT FRONTIER</option>
                        <option value="DES">DES - DELIVERED EX SHIP</option>
                        <option value="DEQ">DEQ - DELIVERED EX QUAY (DUTY PAID)</option>
                        <option value="DDU">DDU - DELIVERED DUTY UNPAID</option>
                        <option value="DDP">DDP - DELIVERED Duty PAID</option>
                    </select>
                </div>
                <button onClick={nextForm} className="btn-floating blue right">Next</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setReceiverInfo: (receiverInfo) => dispatch(setReceiverInfo(receiverInfo))
});

const mapStateToProps = state => ({
    tradeDeal: state.tradeDeal
});

export default connect(mapStateToProps,mapDispatchToProps)(TradeForm2);