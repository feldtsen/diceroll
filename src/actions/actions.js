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
function removeItemFromCartAction(items, price, pid, past) {
    return {
        type: actionType.REMOVE_ITEM_FROM_CART_ACTION,
        items,
        price,
        id: count++,
        pid,
        past

    }
}
function addToCartAction(items, price, pid, past) {
    return {
        type: actionType.ADD_TO_CART_ACTION,
        items,
        price,
        id: count++,
        pid,
        past

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

function addNewProductAction(products, pid, past) {
    return {
        type: actionType.ADD_NEW_PRODUCT_ACTION,
        products,
        pid: Number(pid),
        id: count++,
        past
    }
}

function historyOpenAction(open) {
    return {
        type: actionType.HISTORY_OPEN_ACTION,
        open
    }
}

function deleteProductAction(products, past) {
    return {
        type: actionType.DELETE_PRODUCT_ACTION,
        products,
        id: count++,
        past
    }
}
function editProductAction(products) {
    return{
        type: actionType.EDIT_PRODUCT_ACTION,
        products,
        id: count++
    }
}

function timeMachineAction(capsule) {
    return {
        type: actionType.TIME_MACHINE_ACTION,
        capsule
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
    editProductAction,
    timeMachineAction
};
