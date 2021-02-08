import React from 'react';

const Todo = (props) => {
        return (
            <h3 
            onClick={() => props.click(props.todo.id)}
            className={`${props.todo.completed ? "completed" : ""}`}>{props.todo.task}</h3>
        )
}

export default Todo;