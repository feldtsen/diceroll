import * as actionType from './types'

function toggleProductViewAction(viewOpen, pid) {
    return {
        type: actionType.TOGGLE_PRODUCT_VIEW_ACTION,
        open: !viewOpen,
        pid
    }
}

function toggleCartViewAction(viewOpen) {
    return {
        type: actionType.TOGGLE_CART_VIEW_ACTION,
        open: !viewOpen,
    }
}
function removeItemFromCartAction(items, price) {
    return {
        type: actionType.REMOVE_ITEM_FROM_CART_ACTION,
        items,
        price
    }
}
function addToCartAction(items, price) {
    return {
        type: actionType.ADD_TO_CART_ACTION,
        items,
        price
    }
}

function loginAction(status) {
    return {
        type: actionType.LOGIN_ACTION,
        status
    }
}

function itemHeightAction(height) {
    return {
        type: actionType.ITEM_HEIGHT_ACTION,
        height
    }
}


function changeInputAction(name,value) {
    return {
        type: actionType.CHANGE_INPUT_ACTION,
        name,
        value
    }
}
function addNewProductAction(products) {
    return {
        type: actionType.ADD_NEW_PRODUCT_ACTION,
        products
    }
}
export {
    toggleProductViewAction,
    toggleCartViewAction,
    removeItemFromCartAction,
    addToCartAction,
    loginAction,
    itemHeightAction,
    changeInputAction,
    addNewProductAction
};
