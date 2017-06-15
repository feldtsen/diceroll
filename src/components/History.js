import React, {Component} from 'react';
import {connect} from 'react-redux';
import { historyOpenAction, timeMachineAction } from '../actions/actions'
import * as actionTypes from '../actions/types'

class History extends Component {
    render(){
        return (
            <div>
                <button className="historyToggleButton" onClick={this.toggleHistory} style={{bottom: this.props.historyOpen? this.props.height * 0.15 + 'px': '0px'}}>History</button>
                <ul className="history" style={{height: this.props.historyOpen? this.props.height * 0.15 + 'px': '0px'}}>
                    {
                        this.props.history.slice(0).reverse().map((item, i)=>{
                            const filter = item[item.id]=== actionTypes.ADD_TO_CART_ACTION
                                || item[item.id] === actionTypes.REMOVE_ITEM_FROM_CART_ACTION
                                || item[item.id] === actionTypes.ADD_NEW_PRODUCT_ACTION
                                || item[item.id] === actionTypes.DELETE_PRODUCT_ACTION;
                            return(
                                <li key={item.id} style={{color: filter?'':'cadetblue'}}>
                                    <h3>{item.id}: {item[item.id]}</h3>
                                    {
                                        filter?
                                            <button name={item.id} onClick={this.timeMachine}>Jump to snapshot</button>
                                            :
                                            ''
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    timeMachine = (e) => {
        const index = e.target.name;
        const capsule = this.props.past[index];
        this.props.dispatch(timeMachineAction(capsule));
    };

    toggleHistory = () => {
        const open = !this.props.historyOpen;
        this.props.dispatch(historyOpenAction(open));
    }
}

function mapStateToProps(state) {
    return {
        history: state.history,
        past: state.past,
        height: state.meta.height,
        historyOpen: state.meta.historyOpen
    }
}
export default connect(mapStateToProps)(History);