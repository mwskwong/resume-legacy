import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, errorInfo) {
    // TODO
    console.log("Caught by ErrorBoundary");
    console.error(error);
    console.log(errorInfo);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};
ErrorBoundary.whyDidYouRender = true;

export default ErrorBoundary;