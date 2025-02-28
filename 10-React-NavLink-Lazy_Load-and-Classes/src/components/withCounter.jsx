import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class WithCounter extends Component {
    constructor(props) {
      super(props);
      //   console.log(this.props);

      this.state = {
        count: 0,
      };
      this.decrement = this.decrement.bind(this);
    }

    decrement() {
      this.setState({ count: this.state.count - 1 });
    }

    render() {
      //   console.log(this.props);
      return (
        <WrappedComponent
          count={this.state.count}
          decrement={this.decrement}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;
