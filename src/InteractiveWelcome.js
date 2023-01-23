import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "John", // undefined triggers "someone"
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({
      username: value,
    });
  };
  render() {
    return (
      <div>
        <input
          name="name"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <br />
        {/* <input /> */}
        {/* <label>
          Name:
          <input type="text" name="name" />
        </label> */}
        <Welcome name={this.state.username} age={19} />
        {/* <Welcome name={this.state.username ?? "someone"} age={19} /> */}
      </div>
    );
  }
}
