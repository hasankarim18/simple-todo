import * as actionTypes from './actionTypes'

const initialState = {
    status: 'ALL',
    colors: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }
        case actionTypes.COLORCHANGED:
            const { color, changeType } = action.payload
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            action.payload.color
                        ]
                    }
                case 'remove':
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color)
                    }
                default:
                    return state
            }

        default:
            return state
    }

}



export default reducer