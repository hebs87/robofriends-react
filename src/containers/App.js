import React, {Component, Fragment} from "react";
// Redux import
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
// Import Redux action
import {setSearchField} from "../redux/actions";

// Gets the whole state and return the piece of state that we're interested in (replaces searchField in App state
const mapStateToProps = state => ({
  // If we had root reducer, we would need to say state.searchRobots.searchField
  searchField: state.searchField,
});

// Gets dispatch as a param, which allows us to dispatch the action
const mapDispatchToProps = dispatch => ({
  // onSearchChange is the prop which gets the event target value (search text)
  onSearchChange: event => dispatch(setSearchField(event.target.value))
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      // No longer needed as redux is handling it
      // searchField: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(robots => this.setState({robots, isLoading: false}))
      .catch(error => console.log(error));
  }

  // No longer needed as redux is handling it
  // onSearchChange = event => {
  //   let searchField = event.target.value;
  //   this.setState({searchField});
  // }

  render() {
    const {robots, isLoading} = this.state;
    const {searchField, onSearchChange} = this.props;
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
            <SearchBox onSearchChange={onSearchChange}/>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
