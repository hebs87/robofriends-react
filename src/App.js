import React, {Component} from "react";
import robots from "./data/robots";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchField: '',
    }
  }

  onSearchChange = event => {
    let searchField = event.target.value;
    this.setState({searchField});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => (
      robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    ));

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App;
