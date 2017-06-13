import * as actionType from '../actions/types'

function  rootReducer(state, action) {
    switch (action.type){
        case actionType.TOGGLE_PRODUCT_VIEW_ACTION:
            return {
                ...state,
                products: {
                    ...state.products,
                    view: {
                        ...state.products.view,
                        open: action.open,
                        pid: action.pid
                    }
                }
            };
        case actionType.TOGGLE_CART_VIEW_ACTION:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    view: {
                        ...state.products.view,
                        open: action.open,
                    }
                }
            };
        case actionType.REMOVE_ITEM_FROM_CART_ACTION:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    sum: state.cart.sum - action.price,
                    items: action.items
                }
            };
        case actionType.ADD_TO_CART_ACTION:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    sum: state.cart.sum + action.price,
                    items: action.items
                }
            };
        default:
            return {...state};
    }
}

export default rootReducer;