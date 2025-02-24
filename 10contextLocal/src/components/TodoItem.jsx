import React, { useState } from 'react'
import { UseTodo } from '../contexts/TodoContext'

function TodoItem({ todo }) {

    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isEditable, setIsEditable] = useState(false)

    const { updateTodo, deleteTodo, toggleComplete } = UseTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    const buttonOnClick = () => {
        if (todo.completed) return;
        if (isEditable) {
            updateTodo(todo.id,{...todo, todo: todoMsg})
            setIsEditable(false)
        }
        else{
            setIsEditable((prev) => !prev)
        }
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
        >
            <input
                type='checkbox'
                className='cursor-pointer'
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type='text'
                className={`border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!toggleComplete}
            />
            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer'
                onClick={buttonOnClick}
                disabled={todo.completed}
            >
                {isEditable ? "📁" : "✏️"}
            </button>

            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer'
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>

        </div>
    )
}

export default TodoItem