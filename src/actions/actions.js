import * as actionType from './types'


function changeInputValueAction(target) {
    return {
        type: actionType.CHANGE_INPUT_ACTION,
        name: target.name,
        value: Number(target.value),
        class: target.className
    }
}

function toggleProductViewAction(viewOpen, pid) {
    console.log('productclicked');
    return {
        type: actionType.TOGGLE_PRODUCT_VIEW_ACTION,
        open: !viewOpen,
        pid: pid
    }
}

export {
    changeInputValueAction,
    toggleProductViewAction
};
