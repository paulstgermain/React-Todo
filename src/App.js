import React from 'react';
import TodoList from './components/TodoList';
import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Learn React',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Style This App',
          id: 1528817084358,
          completed: false
        }
      ],
      newTodo: {
        task: '',
        id: 0,
        completed: false
      }
    }
  }

  

  handleChange = (event) => {
    let value = event.target.value;

    this.setState({newTodo: {[event.target.name]: value, id: Date.now(), completed: false}});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let newToDoList = [...this.state.todos, this.state.newTodo];
    this.setState({todos: newToDoList});
    this.setState({newTodo: {task: '', id: 0, completed: false}});
  }

  handleClick = (id) => {
    const editToDoList = this.state.todos.map((todo) => {
      if (todo.id === id){
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    })

    this.setState({
      todos: editToDoList,
    });
  };

  cleanList = (event) => {
    event.preventDefault();

    const cleanList = this.state.todos.filter((todo) => todo.completed === false);
    this.setState({todos: cleanList});
  }
  
  render() {
    return (
      <div className='app'>
        <TodoList 
        todos={this.state.todos} 
        change={this.handleChange} 
        newTodo={this.state.newTodo} 
        submit={this.handleSubmit} 
        click={this.handleClick} 
        clean={this.cleanList}
        />
      </div>
    );
  }
}

export default App;
