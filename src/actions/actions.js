import * as actionType from './types'


function changeInputValueAction(target) {
    return {
        type: actionType.CHANGE_INPUT_ACTION,
        name: target.name,
        value: Number(target.value),
        class: target.className
    }
}

export {
    changeInputValueAction,
};
