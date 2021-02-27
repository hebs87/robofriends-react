import {Component} from "react";
// Redux import
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
// Import Redux actions
import {setSearchField, requestRobots} from "../redux/actions";

// Gets the whole state and return the piece of state that we're interested in (replaces searchField in App state)
const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error,
  isPending: state.requestRobots.isPending,
});

// Gets dispatch as a param, which allows us to dispatch the action
const mapDispatchToProps = dispatch => ({
  // onSearchChange is the prop which gets the event target value (search text)
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robots => (
      robots.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className='tc'>
        {
          isPending &&
          <h1 className='f1'>Loading...</h1>
        }
        {
          !isPending &&
          <>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </>
        }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
