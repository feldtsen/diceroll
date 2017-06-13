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
        case actionType.LOGIN_ACTION:
            return {
                ...state,
                fakeAdmin: {
                    loggedIn: action.status
                }
            };
        case actionType.CHANGE_INPUT_ACTION:
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    [action.name]: action.value
                }
            };
        case actionType.ADD_NEW_PRODUCT_ACTION:
            return {
                ...state,
                products: action.products
            };
        case actionType.ITEM_HEIGHT_ACTION:
            return {
                ...state,
                meta: {
                    height: action.height
                }
            };

        default:
            return {...state};
    }
}

export default rootReducer;