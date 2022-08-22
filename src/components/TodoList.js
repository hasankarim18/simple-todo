import React from 'react'
import { useSelector } from 'react-redux'




import Todo from './Todo'
const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const filters = useSelector(state => state.filters)

    const filterByStatus = todo => {

        const { status } = filters

        if (status === 'ALL') {
            return true
        } else if (status === 'Complete') {
            return todo.completed
        } else if ('Incomplete') {
            return !todo.completed
        }

    }

    const filterByColor = todo => {
        const { colors } = filters
        if (colors.length > 0) {
            if (todo.color) {
                return colors.includes(todo.color)
            }
            return true

        } else {
            return true
        }
    }

    return (

        <div style={{ height: "300px" }} className="mt-2 text-gray-700 text-sm  overflow-y-auto">
            {todos
                .filter(filterByStatus)
                .filter(filterByColor)
                .map((todo) => {

                    return (
                        <Todo key={todo.id} todo={todo} />
                    )
                })}
        </div>

    )
}

export default TodoList