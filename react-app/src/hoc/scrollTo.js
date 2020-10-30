import React from 'react';

const withScrollTo = (offset = 500) => WrappedComponent => {
  return class WithScrollTo extends React.Component {
    componentDidMount() {
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      })
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
};

export default withScrollTo;