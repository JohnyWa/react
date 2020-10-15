import React from "react";

const asyncImportHoc = data => {
  return class WithSomeProps extends React.Component{
    state = {
      component: null
    };

    componentDidMount() {
      data().then(module => this.setState({component: module.default}))
    }

    render() {
      const { component: CustomComponent } = this.state;

      return CustomComponent && <CustomComponent />
    }
  }
};

export default asyncImportHoc;