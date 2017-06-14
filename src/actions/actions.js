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
function removeItemFromCartAction(items, price, pid) {
    return {
        type: actionType.REMOVE_ITEM_FROM_CART_ACTION,
        items,
        price,
        id: count++,
        pid

    }
}
function addToCartAction(items, price, pid) {
    return {
        type: actionType.ADD_TO_CART_ACTION,
        items,
        price,
        id: count++,
        pid

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
        pid: Number(pid),
        id: count++
    }
}

function historyOpenAction(open) {
    return {
        type: actionType.HISTORY_OPEN_ACTION,
        open
    }
}

function deleteProductAction(products) {
    return {
        type: actionType.DELETE_PRODUCT_ACTION,
        products,
        id: count++
    }
}
function editProductAction(products) {
    return{
        type: actionType.EDIT_PRODUCT_ACTION,
        products,
        id: count++
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
    historyOpenAction,
    deleteProductAction,
    editProductAction
};
