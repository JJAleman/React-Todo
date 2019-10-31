import React from 'react';


class TodoForm extends React.Component {

    constructor () {
        super();
        this.state = {
            todoName: ''
        };
    }

    handleChanges = e => {
        this.state({
            todoName: e.target.value
        });
    };

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
            <div></div>
        )
    }

}

export default TodoForm;