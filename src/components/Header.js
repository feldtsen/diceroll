import React, {Component} from 'react';
import {connect} from 'react-redux';
import { openCartAction } from '../actions/actions'

class Header extends Component {
    render(){
        return (
            <div className="header">
                <div>DICEROLL</div>
                <div onClick={this.openCart}>Cart [{Object.keys(this.props.allItemsInCart).length}]</div>
            </div>
        )
    }
    openCart = (e) => {
        const open = this.props.cartOpen;
        this.props.dispatch(openCartAction(e.target, open));
    }
}



function mapStateToProps(state) {
    return {
        open: state.cart.open,
        allItemsInCart: state.cart.inCart
    }
}
export default connect(mapStateToProps)(Header);