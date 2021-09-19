import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
    }

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action)
    }

    return (
        <div>
            <span>
                <h1>Lista de Tareas ({todos.length}) <FontAwesomeIcon icon={faTasks}/></h1>
            </span>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos = {todos}
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle}   
                    />
                </div>

                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo = {handleAddTodo}
                    />
                </div>
            </div>
   
        </div>
    )
}
