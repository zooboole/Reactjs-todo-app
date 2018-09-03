import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      initialEntry: ""
    };
  }

  onInputChange = e => {
    this.setState({initialEntry: e.target.value})
  };
  copyTodo = () => {
    return this.state.todos.slice();
  }
  onClick = () =>{
    let todoCopy = this.copyTodo();
    todoCopy.push(this.state.initialEntry);

    // Update state
    this.setState({todos:todoCopy, initialEntry:''})
  }

  onDelete = i => {
    let todoCopy = this.copyTodo();
    todoCopy.splice(i, 1);

    // Update state
    this.setState({todos: todoCopy});
  }
  render() {
    let list = this.state.todos.map((e,i) => {
      return (<Todo todo={e} key={i} delete={() => this.onDelete(i)}/>);
    });
    return (
      <div className="todo">
        <div className="add-form">
          <input type="text" placeholder="What next?" value={this.state.initialEntry}  onChange={this.onInputChange}/>
          <button onClick={this.onClick}>Add</button>
        </div>
        <div className="todos">
          {this.state.todos.length === 0 ? 'Nothing to do' : "Tasks to do" } 
          <hr/>
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

export default App;
