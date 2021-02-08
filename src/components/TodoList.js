import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {

        return(
            <div className='todolist'>
                <h1>TodoList</h1>
                {props.todos.map(todo => {
                return <Todo key={todo.id} todo={todo} click={props.click} />
                })
                }
                <TodoForm 
                change={props.change} 
                newTodo={props.newTodo} 
                submit={props.submit} 
                clean={props.clean}
                />
            </div>
        )
}

export default TodoList;