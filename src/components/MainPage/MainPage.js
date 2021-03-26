import {Component} from "react";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = robots => {
    return robots.filter(robots => (
      robots.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    ));
  };

  render() {
    const {onSearchChange, robots, isPending} = this.props;

    return (
      <div className='tc'>
        {
          isPending &&
          <h1 className='f1'>Loading...</h1>
        }
        {
          !isPending &&
          <>
            <Header/>
            <SearchBox onSearchChange={onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={this.filteredRobots(robots)}/>
              </ErrorBoundary>
            </Scroll>
          </>
        }
      </div>
    )
  }
}

export default MainPage;