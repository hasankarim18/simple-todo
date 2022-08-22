import React, { useState } from 'react'
import notes from '../images/notes.png'
import doubleTick from '../images/double-tick.png'
import plus from '../images/plus.png'
import { added, allCompleted, clearCompleted } from '../store/todos/actionCreators'
import { useDispatch } from 'react-redux'
const Header = () => {



    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // console.log(input)
        dispatch(added(input))
        setInput('')
    }



    return (

        <div>
            <form onSubmit={onSubmitHandler}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img

                    src={notes}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    onChange={handleInput}
                    value={input}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    style={{ background: plus }}
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={() => dispatch(allCompleted())}
                    className="flex space-x-1 cursor-pointer">
                    <img
                        className="w-4 h-4"
                        src={doubleTick}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li
                    onClick={() => dispatch(clearCompleted())}
                    className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    )
}

export default Header