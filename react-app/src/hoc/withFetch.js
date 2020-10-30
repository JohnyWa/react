import React from "react";

const withFetch = url => WrappedComponent => {
  return class WithFetch extends React.Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    delay = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    };

    componentDidMount() {
      this.setState({ loading: true });

      this.delay(3000).then(
        () =>  fetch(url)
          .then(res => res.json())
          .then(data => this.setState({ data }))
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ loading: false }))
      )
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;