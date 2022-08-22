import * as actionTypes from './actionTypes'
import { initialState } from "./initialState"

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0)
    return maxId + 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDED:
            console.log(nextTodoId(state))
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false

                }
            ]
        case actionTypes.TOGGLED:

            return state.map(todo => {
                if (todo.id !== action.payload) {

                    return {
                        ...todo
                    }
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }


            })


        case actionTypes.COLORSELECTED:
            const { todoId, color } = action.payload


            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo
                } else {
                    return {
                        ...todo,
                        color: color
                    }
                }
            })

        case actionTypes.DELETE:

            return state.filter(todo => todo.id !== action.payload)

        case actionTypes.ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case actionTypes.CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)

        default:
            return [...state]
    }
}

export default reducer