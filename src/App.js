import React, {Component, Fragment} from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(robots => this.setState({robots, isLoading: false}))
      .catch(error => console.log(error));
  }

  onSearchChange = event => {
    let searchField = event.target.value;
    this.setState({searchField});
  }

  render() {
    const {isLoading} = this.state;
    const filteredRobots = this.state.robots.filter(robots => (
      robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    ));

    return (
      <div className='tc'>
        {
          isLoading &&
          <h1 className='f1'>Loading...</h1>
        }
        {
          !isLoading &&
          <Fragment>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
          </Fragment>
        }
      </div>
    )
  }
}

export default App;
