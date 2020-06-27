import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../state/recoilState'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'
import TodoListFilter from './TodoListFilter'

const TodoApp = () => {
    const todoList = useRecoilValue(filteredTodoListState)
    return (
        <div className="todo-app-container">
            <div>
                <CreateTodo />
                <TodoListFilter />
                {todoList.map((item) => (<TodoItem key={item.id} item={item} />))}
            </div>
        </div>
    )
}
export default TodoApp
