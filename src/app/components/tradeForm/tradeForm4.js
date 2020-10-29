import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { setDescOfConsign } from '../../actions/tradeDeal';

const TradeForm4 = ({history,setDescOfConsign,tradeDeal}) => {
    const [pid, setPID] = useState("");
    const [fxRate,setFxRate] = useState("");
    const [description,setDescription] = useState("");
    const [sellPrice,setSellPrice] = useState("");
    const [tax,setTax] = useState(0);
    const [itemPrice,setItemPrice] = useState(0);
    const [unitsPk,setUnitsPk] = useState("");
    const [qty,setQty] = useState(0);
    const [amount,setAmount] = useState("");
    const [products,setProducts] = useState([]);
    const [totalAmount,setTotalAmount] = useState("");
    const [totalNetWt,setTotalNetWt] = useState("");
    const [currDisc,setCurrDisc]= useState("");
    const [totalCube,setTotalCube]= useState("");
    const [totalGross,setTotalGross] = useState("");

    const product = {
        pid,
        fxRate,
        description,
        sellPrice,
        tax,
        itemPrice,
        unitsPk,
        qty,
        amount
    };

    const addProduct = (e) => {
        e.preventDefault();
        setProducts([...products, product]);
        setPID("");
        setAmount("");
        setQty(0);
        setDescription("");
        setUnitsPk("");
        setSellPrice("");
        setTax(0);
        setFxRate("");
        setItemPrice(0);
    }

    const nextForm = (e) => {
        e.preventDefault();
        setProducts([...products, product]);
        const descOfConsign = {
            products,
            totalAmount,
            totalCube,
            totalGross,
            totalNetWt,
            currDisc
        }
        console.log(descOfConsign);
        setDescOfConsign(descOfConsign);
        //history.push('/tradeform5');
    }
    return (
        <div className="container">
        <h3>Description of Consignment</h3>
            <form>
                <div className="input-field">
                    <label htmlFor="pid">Product ID {" "}</label>
                    <input type="text" name="pid" id="pid" value={pid} onChange={(e) => setPID(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="fxRate">fxRate {" "}</label>
                    <input type="text" name="fxRate" id="fxRate" value={fxRate} onChange={(e) => setFxRate(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="description">Description/Package {" "}</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="sellPrice">Sell Price {" "}</label>
                    <input type="text" name="sellPrice" id="sellPrice" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="tax">Tax % {" "}</label>
                    <input type="number" name="tax" id="tax" value={tax} onChange={(e) => setTax(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="itemPrice">Item Price {" "}</label>
                    <input type="number" name="itemPrice" id="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="unitsPk">Units in Pk. {" "}</label>
                    <input type="text" name="unitsPk" id="unitsPk" value={unitsPk} onChange={(e) => setUnitsPk(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="qty">Quantity {" "}</label>
                    <input type="number" name="qty" id="qty" value={qty} onChange={(e) => setQty(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="amount">Amount {" "}</label>
                    <input type="text" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="row">
                    <div className="col s4">
                        <h5>Add another Product</h5>
                    </div>
                    <div className="col s4"></div>
                    <div className="col s4">
                        <button onClick={addProduct} className="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i></button>
                    </div>
                </div>
                <div className="input-field">
                    <label htmlFor="totalAmount">Total Amount {" "}</label>
                    <input type="text" name="totalAmount" id="totalAmount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="currDisc">Curr Disc {" "}</label>
                    <input type="text" name="currDisc" id="currDisc" value={currDisc} onChange={(e) => setCurrDisc(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="totalNetWt">Total Net Wt. {" "}</label>
                    <input type="text" name="totalNetWt" id="totalNetWt" value={totalNetWt} onChange={(e) => setTotalNetWt(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="totalCube">Total Cube {" "}</label>
                    <input type="text" name="totalCube" id="totalCube" value={totalCube} onChange={(e) => setTotalCube(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="totalGross">Total Gross {" "}</label>
                    <input type="text" name="totalGross" id="totalGross" value={totalGross} onChange={(e) => setTotalGross(e.target.value)} />
                </div>
                <button onClick={nextForm} className="btn-floating blue right">Next</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setDescOfConsign: (descOfConsign) => dispatch(setDescOfConsign(descOfConsign))
});

const mapStateToProps = state => ({
    tradeDeal: state.tradeDeal
})

export default connect(mapStateToProps,mapDispatchToProps)(TradeForm4);