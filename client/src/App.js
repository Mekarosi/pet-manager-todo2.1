import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodo from './components/CreateTodo';
import DeleteTodo from './components/DeleteTodo';
import EditTodo from './components/EditTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <h1>Pet Manager Todo</h1>
          <br />
          <Route path='/' exact component={TodoList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
          <Route path='/delete/:id' component={DeleteTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
