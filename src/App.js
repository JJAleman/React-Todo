import React from 'react';


const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: data 
    };
  }

  // This toggles the todo on and off it is completed
  toggleTodo = todoId => {
    console.log(`toggleTodo: `, todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId){
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  // This will clear the todos that have been completed
  clearTodo = () => {
    console.log('cleared todo!');
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!  
        </h2>
      </div>
    );
  }
}

export default App;
