import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginAction} from '../actions/actions'

class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1 className="logo">DICEROLL</h1>
                <button className="adminLogin" onClick={this.adminLogin}  style={{bottom: this.props.historyOpen? this.props.height * 0.15 + 'px': 0}}>Admin Test</button>
            </div>
        )
    }
    adminLogin = () => {
        const changedStatus = !this.props.fakeAdmin.loggedIn;
        this.props.dispatch(loginAction(changedStatus));

    }
}

function mapStateToProps(state) {
    return {
        fakeAdmin:state.fakeAdmin,
        height: state.meta.height,
        historyOpen: state.meta.historyOpen
    }
}
export default connect(mapStateToProps)(Header);