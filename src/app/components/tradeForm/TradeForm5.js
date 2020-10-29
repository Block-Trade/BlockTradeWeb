import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { setFinalBill } from '../../actions/tradeDeal';

const TradeForm5 = ({history,setFinalBill,tradeDeal}) => {
    const [curr,setCurr] = useState("");
    const [adjTotal,setAdjTotal] = useState("");
    const [devAmount,setDevAmount] = useState("");
    const [packingChg,setPackingChg] = useState("");
    const [handChg,setHandChg] = useState("");
    const [otherChg,setOtherChg] = useState("");
    const [insurAmount,setInsurAmount] = useState("");
    const [taxAmount,setTaxAmount] = useState("");
    const [preTaxAmount,setPreTaxAmount] = useState("");
    const [tradeTotal,setTradeTotal] = useState("");

    useEffect(() => {
        const { billDetails } = tradeDeal;
        if(billDetails){
            setCurr(billDetails.curr);
            setAdjTotal(billDetails.adjTotal);
            setDevAmount(billDetails.devAmount);
            setPackingChg(billDetails.packingChg);
            setHandChg(billDetails.handChg);
            setOtherChg(billDetails.otherChg);
            setInsurAmount(billDetails.insurAmount);
            setTaxAmount(billDetails.taxAmount);
            setPreTaxAmount(billDetails.preTaxAmount);
            setTradeTotal(billDetails.tradeTotal);
        }
    },[]);
    const nextForm = (e) => {
        e.preventDefault();
        const finalBill = {
            curr,
            adjTotal,
            devAmount,
            packingChg,
            handChg,
            otherChg,
            taxAmount,
            preTaxAmount,
            tradeTotal
        };
        console.log(finalBill);
        setFinalBill(finalBill);
        history.push('/tradedeal');
    }
    return (
        <div className="container">
        <h3>Amount Details</h3>
            <form>
                
                <div className="input-field col s6">
                <select name="curr" value={curr} onChange={(e) => setCurr(e.target.value)}>
                <option value="" disabled selected>Invoice Currency</option>
                <option value="USD">United States Dollars</option>
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
                <div className="input-field">
                    <label htmlFor="adjTotal">Adjusted Total {" "}</label>
                    <input type="text" name="adjTotal" id="adjTotal" value={adjTotal} onChange={(e) => setAdjTotal(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="devAmount">Dev Amount {" "}</label>
                    <input type="text" name="devAmount" id="devAmount" value={devAmount} onChange={(e) => setDevAmount(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="packingChg">Packing Charges {" "}</label>
                    <input type="text" name="packingChg" id="packingChg" value={packingChg} onChange={(e) => setPackingChg(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="handChg">Handling Charges {" "}</label>
                    <input type="text" name="handChg" id="handChg" value={handChg} onChange={(e) => setHandChg(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="otherChg">Other Charges {" "}</label>
                    <input type="text" name="otherChg" id="otherChg" value={otherChg} onChange={(e) => setOtherChg(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="insurAmount">Insurance Amount {" "}</label>
                    <input type="text" name="insurAmount" id="insurAmount" value={insurAmount} onChange={(e) => setInsurAmount(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="taxAmount">Tax Amount {" "}</label>
                    <input type="text" name="taxAmount" id="taxAmount" value={taxAmount} onChange={(e) => setTaxAmount(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="preTaxAmount">Pre-Tax Amount {" "}</label>
                    <input type="text" name="preTaxAmount" id="preTaxAmount" value={preTaxAmount} onChange={(e) => setPreTaxAmount(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="tradeTotal">Trade Total {" "}</label>
                    <input type="text" name="tradeTotal" id="tradeTotal" value={tradeTotal} onChange={(e) => setTradeTotal(e.target.value)} />
                </div>
                <button onClick={nextForm} className="btn waves-effect blue center">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setFinalBill: (finalBill) => dispatch(setFinalBill(finalBill))
});

const mapStateToProps = state => ({
    tradeDeal: state.tradeDeal
})

export default connect(mapStateToProps,mapDispatchToProps)(TradeForm5);