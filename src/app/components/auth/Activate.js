import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { activateUser, clearError } from '../../actions/auth';
import M from 'materialize-css/dist/js/materialize.min.js';


const ActivateForm = ({auth: {msg, error}, match,activateUser}) => {

    const onActivate = () => {
        activateUser(match.params.token);
    }

    useEffect(() => {
        if(error!==null) {
            M.toast({html: error, classes:'red'});
            clearError();
        }
    },[error]);    

    return (
        <div>
            <div class="card small center">
                <div class="card-content">
                <span class="card-title">Account activation</span>
                <p>Welcome to BlockTrade. Be a part of our family and start trading in a secure and faster way.</p>
                </div>
                <div class="card-action">
                    <button disabled={error!==null} className="btn blue" onClick={onActivate}>Activate</button>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {activateUser})(ActivateForm);