import { Component } from "react";
import withCounter from "./withCounter";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    this.timerId = null;
    this.decrement = this.decrement.bind(this);

    // THIS.PROPS.count and decrement COMING FROM HIGHER ORDER FUNCTION

    // console.log(this.props);

    // to access props inside constructor we need to pass the props in constructor and super
  }

  componentDidMount() {
    // console.log("Component Did Mount");
    // this.timerId = setInterval(() => {
    //   console.log("Timer On");
    // }, 1000);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
    // clearInterval(this.timerId);
  }

  // used for without arrow function
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // console.log(this);
    // console.log("RENDER");
    return (
      <>
        <p className="pb-2 pt-4 text-xl font-medium">{this.props.name}</p>

        <div className="flex items-center gap-5">
          <button
            className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
            // onClick={function () {
            //   this.setState({ count: this.state.count - 1 });
            // }.bind(this)}

            // onClick={this.decrement.bind(this)}

            onClick={this.decrement}
          >
            -
          </button>
          <p className="text-2xl font-semibold">{this.state.count}</p>

          <button
            className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
            onClick={() => {
              // console.log(this);
              // in arrow func this refer to the class Instance autometic

              this.setState({ count: this.state.count + 1 });
            }}
          >
            +
          </button>
        </div>

        {/* <div className="flex items-center gap-5 pt-4">
          <button
            className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
            onClick={() => this.setState({ count2: this.state.count2 - 1 })}
          >
            -
          </button>
          <p className="text-2xl font-semibold">{this.state.count2}</p>

          <button
            className="rounded bg-sky-500 px-2 py-1 text-2xl font-medium"
            onClick={() => this.setState({ count2: this.state.count2 + 1 })}
          >
            +
          </button>
        </div> */}
      </>
    );
  }
}

export default withCounter(ClassCounter);

// notesss

// IN CLASS COMPONENT THIS KEYWORD ALWAYS POINTS TO THE OBJECT RETURNED BY CLASS COMPONENT

// React lifecycle methods are categorized into three phases:

// 1. Mounting (When a component is created and added to the DOM):
// constructor(): Initializes the component's state and binds methods.
// static getDerivedStateFromProps(props, state): Syncs state with props before rendering.
// render(): Renders the component's output (required method).
// componentDidMount(): Executes after the component is mounted, ideal for side effects like API calls.

// 2. Updating (When props, state, or context change):
// static getDerivedStateFromProps(props, state): Syncs state with updated props.
// shouldComponentUpdate(nextProps, nextState): Determines if re-rendering is necessary (optimization hook).
// render(): Re-renders the component.
// getSnapshotBeforeUpdate(prevProps, prevState): Captures DOM info before updates (e.g., scroll position).
// componentDidUpdate(prevProps, prevState, snapshot): Executes after updates, ideal for side effects.

// 3. Unmounting (When a component is removed from the DOM):
// componentWillUnmount(): Cleanup tasks like clearing timers or removing event listeners.
