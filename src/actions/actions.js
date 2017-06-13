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
export {
    toggleProductViewAction,
    toggleCartViewAction,
    removeItemFromCartAction,
    addToCartAction
};
