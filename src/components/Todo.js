import { useDispatch } from 'react-redux'
import React from 'react'
import { toggled, colorSelected, deleted } from '../store/todos/actionCreators'

import cancel from '../images/cancel.png'
const Todo = ({ todo }) => {
    const dispatch = useDispatch()
    const { text, id, completed, color } = todo



    const statusChangeHandler = (todoId) => {
        dispatch(toggled(todoId))
    }

    const colorChangeHandler = (id, color) => {
        dispatch(colorSelected(id, color))
    }

    const deleteHandler = (id) => {
        dispatch(deleted(id))
    }

    return (

        <div
            className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >

            <div style={{ position: "relative" }}
                className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500 '}`}
            >
                <input
                    style={{ cursor: "pointer", border: "1px solid blue", width: "20px" }}
                    type="checkbox"
                    checked={completed}
                    onChange={() => statusChangeHandler(id)}
                    className="opacity-0 absolute  rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}

            </div>

            <div className={`select-none flex-1 ${completed && 'line-through'}`}>
                <span>{id}. </span> {todo.text}
            </div>

            <div
                onClick={() => colorChangeHandler(id, 'green')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${color === 'green' && '  bg-green-500'} `}
            ></div>

            <div
                onClick={() => colorChangeHandler(id, 'yellow')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color === 'yellow' && '  bg-yellow-500'}`}
            ></div>

            <div
                onClick={() => colorChangeHandler(id, 'red')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer 
              hover:bg-red-500 border-red-500  ${color === 'red' && 'bg-red-500 '}`}
            ></div>

            <img
                onClick={() => deleteHandler(id)}
                src={cancel}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
            />
        </div>
    )
}

export default Todo