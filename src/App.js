import React, {Component} from "react";
import robots from "./data/robots";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox/>
        <CardList robots={robots}/>
      </div>
    )
  }
}

export default App;
