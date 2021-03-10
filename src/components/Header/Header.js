import {Component} from 'react';

class Header extends Component {
  // Determine when to render the header - only render once as it doesn't need to re-render
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    return (
      <>
        <h1 className='f1'>RoboFriends</h1>
      </>
    )
  }
}

export default Header;
