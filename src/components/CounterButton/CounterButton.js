import {Component} from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.count !== nextState.count;
  };

  render() {
    const {count} = this.state;
    const {color} = this.props;

    return (
      <button
        color={color}
        onClick={() => {this.setState(state => ({count: state.count + 1}))}}
      >
        Count: {count}
      </button>
    );
  };
}

export default CounterButton;
