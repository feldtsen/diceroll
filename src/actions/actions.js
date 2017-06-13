import * as actionType from './types'

function toggleProductViewAction(viewOpen, pid) {
    return {
        type: actionType.TOGGLE_PRODUCT_VIEW_ACTION,
        open: !viewOpen,
        pid,
        id: new Date().getTime()
    }
}

function toggleCartViewAction(viewOpen) {
    return {
        type: actionType.TOGGLE_CART_VIEW_ACTION,
        open: !viewOpen,
        id: new Date().getTime()

    }
}
function removeItemFromCartAction(items, price) {
    return {
        type: actionType.REMOVE_ITEM_FROM_CART_ACTION,
        items,
        price,
        id: new Date().getTime()

    }
}
function addToCartAction(items, price) {
    return {
        type: actionType.ADD_TO_CART_ACTION,
        items,
        price,
        id: new Date().getTime()

    }
}

function loginAction(status) {
    return {
        type: actionType.LOGIN_ACTION,
        status,
        id: new Date().getTime()

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
        id: new Date().getTime()
    }
}
export {
    toggleProductViewAction,
    toggleCartViewAction,
    removeItemFromCartAction,
    addToCartAction,
    loginAction,
    itemHeightAction,
    addNewProductAction
};
