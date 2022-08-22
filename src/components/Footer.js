import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { statusChanged, colorChanged } from '../store/filters/actionCreators'

const nuberOfTodos = (number) => {
    switch (number) {
        case 0:
            return 'No task'
        case 1:
            return '1 task left'

        default:
            return `${number} tasks`
    }
}

const Footer = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const todosRemaining = todos.filter(todo => todo.completed === false).length
    const filters = useSelector(state => state.filters)
    const { status, colors } = filters

    const statusChangeHandler = (status) => {
        dispatch(statusChanged(status))
    }

    const colorChagneHandler = (color) => {
        if (colors.includes(color)) {
            // ache
            dispatch(colorChanged(color, 'remove'))
        } else {
            dispatch(colorChanged(color, 'added'))
        }

    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{nuberOfTodos(todosRemaining)}  left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    onClick={() => statusChangeHandler('ALL')}
                    className={`cursor-pointer ${status === 'ALL' ? 'font-bold' : ''}`}>
                    All
                </li>
                <li>|</li>
                <li
                    onClick={() => statusChangeHandler('Incomplete')}
                    className={`cursor-pointer ${status === 'Incomplete' ? 'font-bold' : ''}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => statusChangeHandler('Complete')}
                    className={`cursor-pointer ${status === 'Complete' ? 'font-bold' : ''}`}>Complete</li>
                <li></li>
                <li></li>
                <li
                    onClick={() => colorChagneHandler('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  ${colors.includes('green') && 'bg-green-500'} `}
                ></li>
                <li onClick={() => colorChagneHandler('red')}
                    className={`h-3 w-3  border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
                ></li>
                <li onClick={() => colorChagneHandler('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    )
}

export default Footer