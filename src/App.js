import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //life cycle method to fetch data from url and converting into json format
  //take users and set monsters to that array 
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
      <input 
        type='search' 
        placeholder='search monsters' 
        onChange={e => this.setState({ searchField: e.target.value })}
      />
      <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;