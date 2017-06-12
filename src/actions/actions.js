import * as actionType from './types'


function changeInputValueAction(target) {
    return {
        type: actionType.CHANGE_INPUT_ACTION,
        name: target.name,
        value: Number(target.value),
        class: target.className
    }
}

function viewProductAction(target, open) {
    return {
        type: actionType.VIEW_PRODUCT_ACTION,
        name: target.name,
        open: open
    }
}

function openCartAction(target, open) {
    return{
        type: actionType.OPEN_CART_ACTION,
        open: !open
    }
}

function addToCartAction(target) {
    return {
        type: actionType.ADD_TO_CART_ACTION,
        pid: target.name
    }
}

export {
    changeInputValueAction,
    viewProductAction,
    openCartAction,
    addToCartAction
};
