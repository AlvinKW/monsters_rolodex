import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        onSearchChange={this.handleChange}
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;