import * as actionTypes from './actionTypes'



export const colorChanged = (color, changeType) => {
    return {
        type: actionTypes.COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}

export const statusChanged = (status) => {
    return {
        type: actionTypes.STATUSCHANGED,
        payload: status
    }
}
