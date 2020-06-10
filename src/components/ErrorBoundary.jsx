import React, {Component, Fragment} from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;
    return (
      <Fragment>
        {
          hasError &&
          <h1>There has been an error!</h1>
        }
        {
          !hasError &&
          children
        }
      </Fragment>
    )
  }
}

export default ErrorBoundary;
