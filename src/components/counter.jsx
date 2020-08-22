import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  //   constructor() {
  //     super();
  //     this.handingIncrement = this.handingIncrement.bind(this);
  //   }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log(this.state.count, this);
  // };

  render() {
    const { doIncrement, decrement, counter, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => doIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            disabled= {this.disableButton()}
            onClick={() => decrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  disableButton(){
    const { value } = this.props.counter;
    return value === 0 ? "disabled" : "";

  }

}

export default Counter;
