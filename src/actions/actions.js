import * as actionType from './types'

let count = 0;

function toggleProductViewAction(viewOpen, pid) {
    return {
        type: actionType.TOGGLE_PRODUCT_VIEW_ACTION,
        open: !viewOpen,
        pid,
        id: count++
    }
}

function toggleCartViewAction(viewOpen) {
    return {
        type: actionType.TOGGLE_CART_VIEW_ACTION,
        open: !viewOpen,
        id: count++

    }
}
function removeItemFromCartAction(items, price) {
    return {
        type: actionType.REMOVE_ITEM_FROM_CART_ACTION,
        items,
        price,
        id: count++

    }
}
function addToCartAction(items, price) {
    return {
        type: actionType.ADD_TO_CART_ACTION,
        items,
        price,
        id: count++

    }
}

function loginAction(status) {
    return {
        type: actionType.LOGIN_ACTION,
        status,
        id: count++

    }
}

function itemHeightAction(height) {
    return {
        type: actionType.ITEM_HEIGHT_ACTION,
        height
    }
}

function addNewProductAction(products, pid) {
    return {
        type: actionType.ADD_NEW_PRODUCT_ACTION,
        products,
        pid,
        id: count++
    }
}

function historyOpenAction(open) {
    return {
        type: actionType.HISTORY_OPEN_ACTION,
        open
    }
}

export {
    toggleProductViewAction,
    toggleCartViewAction,
    removeItemFromCartAction,
    addToCartAction,
    loginAction,
    itemHeightAction,
    addNewProductAction,
    historyOpenAction
};
