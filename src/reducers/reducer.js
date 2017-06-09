import * as actionType from '../actions/types'

function  rootReducer(state, action) {
    switch (action.type){
        case actionType.CHANGE_INPUT_ACTION:
            return{
                ...state,
               accounts: {
                   ...state.accounts,
                   [action.class]: {
                       ...state.accounts[action.class],
                       [action.name]: action.value
                   }

               }
            };
        default:
            return {...state};
    }
}

export default rootReducer;