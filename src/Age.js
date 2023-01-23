import React from "react";

export class Age extends React.Component {
  render() {
    return (
      <span>
        {this.props.age > 18
          ? `Your age is ${this.props.age}`
          : "You are very young!"}

        {/* Second Way John */}
        {/* {this.props.age > 18 && `Your age is ${this.props.age}`}
        {this.props.age <= 18 && "You are very young!"} */}
        {/* {console.log(this.props.age)}
        Your age is {this.props.age} */}
      </span>
      // <span>Your age is {this.props.age}</span>
    );
  }
}
