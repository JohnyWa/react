import React from "react";

const withLoader = WrappedComponent => {
  return class WithLoader extends React.Component {
    render() {
      const { loading } = this.props;
      return (
        <>
          {loading && <h2>Loading...</h2>}
          <WrappedComponent {...this.props}/>
        </>
      )
    }
  }
};

export default withLoader;