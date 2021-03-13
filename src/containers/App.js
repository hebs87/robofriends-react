import {Component} from "react";
// Redux import
import {connect} from 'react-redux';
import MainPage from "../components/MainPage/MainPage";
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
  render() {
    return (
      <>
        <MainPage
          {...this.props}
        />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
