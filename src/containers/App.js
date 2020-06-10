import React, {Component, Fragment} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
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
    const {robots, searchField, isLoading} = this.state;
    const filteredRobots = robots.filter(robots => (
      robots.name.toLowerCase().includes(searchField.toLowerCase())
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
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </Fragment>
        }
      </div>
    )
  }
}

export default App;
