import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { setLogisticsInfo } from '../../actions/tradeDeal';

const TradeForm3 = ({history,setLogisticsInfo, tradeDeal}) => {
    const [poc, setPOC] = useState("");
    const [collDate,setCollDate] = useState("");
    const [collTime,setCollTime] = useState("");
    const [pod,setPOD] = useState("");
    const [deptDate,setDeptDate] = useState("");
    const [deptTime,setDeptTime] = useState("");
    const [placeofd,setPlaceofd] = useState("");
    const [shippingm,setShippingm] = useState("");

    useEffect(() => {
        const { logisticsInfo } = tradeDeal;
        if(logisticsInfo){
            setPOC(logisticsInfo.poc);
            setCollDate(logisticsInfo.collDate);
            setCollTime(logisticsInfo.collTime);
            setPOD(logisticsInfo.pod);
            setDeptDate(logisticsInfo.deptDate);
            setDeptTime(logisticsInfo.deptTime);
            setPlaceofd(logisticsInfo.placeofd);
            setShippingm(logisticsInfo.shippingm);
        }
    },[]);

    const nextForm = (e) => {
        e.preventDefault();
        const logisticsInfo = {
            PlaceofColl: poc,
            collDate,
            collTime,
            PlaceofDis: pod,
            deptDate,
            deptTime,
            PlaceofDel: placeofd,
            shippingm
        }
        console.log(logisticsInfo);
        setLogisticsInfo(logisticsInfo);
        //history.push('/tradeform4')
    }
    return (
        <div className="container">
        <h3>Logistics Details</h3>
            <form>
                <div className="input-field">
                    <label htmlFor="poc">Place of collection {" "}</label>
                    <input type="text" name="poc" id="poc" value={poc} onChange={(e) => setPOC(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="collDate">Collection Date {" "}</label>
                    <input type="date" name="collDate" id="collDate" value={collDate} onChange={(e) => setCollDate(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="collTime">Collection Time {" "}</label>
                    <input type="time" name="collTime" id="collTime" value={collTime} onChange={(e) => setCollTime(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="pod">Place of Discharge {" "}</label>
                    <input type="text" name="pod" id="pod" value={pod} onChange={(e) => setPOD(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="deptDate">Departure Date {" "}</label>
                    <input type="date" name="deptDate" id="deptDate" value={deptDate} onChange={(e) => setDeptDate(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="deptTime">Departure Time {" "}</label>
                    <input type="time" name="deptTime" id="deptTime" value={deptTime} onChange={(e) => setDeptTime(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="placeofd">Place of delivery {" "}</label>
                    <input type="text" name="placeofd" id="placeofd" value={placeofd} onChange={(e) => setPlaceofd(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="shippingm">Shipping Marks {" "}</label>
                    <input type="text" name="shippingm" id="shippingm" value={shippingm} onChange={(e) => setShippingm(e.target.value)} />
                </div>
                <button onClick={nextForm} className="btn-floating blue right">Next</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setLogisticsInfo: (logisticsInfo) => dispatch(setLogisticsInfo(logisticsInfo))
});

const mapStateToProps = state => ({
    tradeDeal: state.tradeDeal
})

export default connect(mapStateToProps,mapDispatchToProps)(TradeForm3);