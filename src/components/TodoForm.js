import React from 'react';


class TodoForm extends React.Component {

    constructor () {
        super();
        this.state = {
            todoName: ''
        };
    }

    // allows you to take from the input field?
    handleChanges = e => {
        this.setState({
            todoName: e.target.value
        });
    };


    // prevents the default behavior of refreshing the page and it stops it from adding another todo if the field is empty.
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.todoName !== '') {
            this.props.addTodo(this.state.todoName);
            this.setState({
                todoName: ''
            });
        }
    };

    render() {
        return (
           <form onSubmit={this.handleSubmit} className="input-wrapper">
               <input className="input"
               onChange = {this.handleChanges}
               type = 'text'
               name = 'todo'
               value = {this.state.todoName}
               />
               <button className="btn-2">Add Todo</button>
           </form>
        )
    }

}

export default TodoForm;