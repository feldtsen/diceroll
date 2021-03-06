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
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: [...state.past, {}]
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
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: [...state.past, {}]

            };
        case actionType.REMOVE_ITEM_FROM_CART_ACTION:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    sum: state.cart.sum - action.price,
                    items: action.items
                },
                products: {
                    ...state.products,
                    [action.pid]: {
                        ...state.products[action.pid],
                        available: state.products[action.pid].available + 1
                    }
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: action.past
            };
        case actionType.ADD_TO_CART_ACTION:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    sum: state.cart.sum + action.price,
                    items: action.items
                },
                products: {
                    ...state.products,
                    [action.pid]: {
                        ...state.products[action.pid],
                        available: state.products[action.pid].available - 1
                    }
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: action.past
            };
        case actionType.LOGIN_ACTION:
            return {
                ...state,
                fakeAdmin: {
                    loggedIn: action.status
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: [...state.past, {}]

            };
        case actionType.ADD_NEW_PRODUCT_ACTION:
            return {
                ...state,
                products: {
                    ...state.products,
                    ...action.products,
                    [action.pid]: {
                        ...state.products[action.pid],
                        pid: action.pid
                    }
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: action.past
            };
        case actionType.DELETE_PRODUCT_ACTION:
            return {
                ...state,
                products: {
                    ...state.products,
                    ...action.products
                },
                cart: {
                    ...state.cart,
                    items: [],
                    sum: 0
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: action.past
            };
        case actionType.EDIT_PRODUCT_ACTION:
            return {
                ...state,
                products: {
                    ...state.products,
                    [action.products.pid]: action.products
                },
                history: state.history.concat({[action.id]: action.type, id: action.id}),
                past: [...state.past, {}]
            };
        case actionType.ITEM_HEIGHT_ACTION:
            return {
                ...state,
                meta: {
                    height: action.height
                }
            };
        case actionType.HISTORY_OPEN_ACTION:
            return {
                ...state,
                meta: {
                    ...state.meta,
                    historyOpen: action.open
                }
            };
        case actionType.TIME_MACHINE_ACTION:
            console.log(action);
            return {
                ...state,
                products: {
                    ...action.capsule.products
                },
                cart: {
                    ...state.cart,
                    items: [...action.capsule.items],
                    sum: action.capsule.sum
                }


            };
        default:
            return {...state};
    }
}

export default rootReducer;