import React from "react";
import { Message } from "./Message";

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Message />
      </div>
    );
  }
}
