import React from "react";

class Loading extends React.Component {
  state = {
    data: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.delay(3000).then(
      () =>  fetch(this.props.url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }))
    )
  }

  delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  };

  render() {
    const {data, loading, error} = this.state;
    return this.props.children({
      data,
      loading,
      error
    })
  }
}

export default Loading;