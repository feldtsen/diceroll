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
        case actionType.VIEW_PRODUCT_ACTION:
            return{
                ...state,
                products: {
                    ...state.products,
                    view: {
                        ...state.products.view,
                        open: action.open,
                        pid: action.name
                    }

                }
            };
        case actionType.OPEN_CART_ACTION:
            return{
                ...state,
                cart: {
                    ...state.cart,
                    open:  action.open
                }
            };
        case actionType.ADD_TO_CART_ACTION:
            return{
                ...state,
                cart: {
                    ...state.cart,
                    inCart: {
                        ...state.inCart,
                        [action.pid]: {
                            title: state.products[action.pid].title,
                            price: state.products[action.pid].price
                        },
                        sum: state.cart.price + state.products[action.pid].price
                    },
                    sum: 0
                }
            };
        default:
            return {...state};
    }
}

export default rootReducer;