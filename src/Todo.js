import React, {Component} from 'react'

class Todo extends Component {
    
    render() {
        return (
            <li key={this.props.key}>{this.props.todo} <button onClick={this.props.delete}>x</button></li>
        );
    }
}
export default Todo;