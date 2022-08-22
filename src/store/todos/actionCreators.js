import * as actionTypes from './actionTypes'



export const added = (todoText) => {
    return {
        type: actionTypes.ADDED,
        payload: todoText

    }
}



export const toggled = (todoId) => {
    return {
        type: actionTypes.TOGGLED,
        payload: todoId
    }
}



export const colorSelected = (todoId, color) => {
    return {
        type: actionTypes.COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}


export const deleted = (todoId) => {
    return {
        type: actionTypes.DELETE,
        payload: todoId
    }
}



export const allCompleted = () => {
    return {
        type: actionTypes.ALLCOMPLETED

    }
}

export const clearCompleted = () => {
    return {
        type: actionTypes.CLEARCOMPLETED
    }
}