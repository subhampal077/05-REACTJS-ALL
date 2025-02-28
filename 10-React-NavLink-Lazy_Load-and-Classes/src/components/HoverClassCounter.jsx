import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  // USING HIGHER ORDER FUNCTION AND REMOVING BELOW CODE

  //   constructor(props) {
  //     super(props);
  //     console.log(this.props);

  //     this.state = {
  //       count: 0,
  //     };
  //     this.decrement = this.decrement.bind(this);
  //   }

  //   decrement() {
  //     this.setState({ count: this.state.count - 1 });
  //   }

  render() {
    // console.log(this);
    return (
      <>
        <p className="pb-2 pt-8 text-xl font-medium">{this.props.name}</p>

        <div>
          <p
            className="rounded-md bg-cyan-200 p-4 text-2xl font-semibold"
            onMouseEnter={this.props.decrement}
          >
            {this.props.count}
          </p>
        </div>
      </>
    );
  }
}

export default withCounter(HoverCounter);
