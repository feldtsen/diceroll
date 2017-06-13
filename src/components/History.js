import React, {Component} from 'react';
import {connect} from 'react-redux';
import {} from '../actions/actions'

class History extends Component {
    render(){
        return (
            <ul className="history" style={{height: this.props.height * 0.15}}>
                {
                    this.props.history.slice(0).reverse().map((item)=>{
                        return(
                            <li key={item.id}>
                                <h3>{item.id}: {item[item.id]}</h3>
                                <button>Undo</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.history);
    return {
        history: state.history,
        height: state.meta.height
    }
}
export default connect(mapStateToProps)(History);