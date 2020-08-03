import React, { Component } from "react";
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  onChange = (e) => {
    var value = e.target.value;
    this.setState({
      searchField: value
    });
    console.log(this.state.searchField);
  }
  render() {
    const {searchField, monsters} = this.state;
    var filterMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <input className="search" type="search" placeholder="Search" onChange={this.onChange}></input>

        <CardList monsters={filterMonster}></CardList>
      </div>
    );
  }
}

export default App;
