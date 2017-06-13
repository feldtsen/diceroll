import React, {Component} from 'react';
import {connect} from 'react-redux';
import {} from '../actions/actions'

class History extends Component {
    render(){
        return (
            <ul className="history" style={{height: this.props.height * 0.1}}>
                {
                    this.props.history.map((item, i)=>{
                        return(
                            <li key={item.type + i}>
                                <h3>{i}: {item.type}</h3>
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