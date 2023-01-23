import React from "react";

export class ClickTracker extends React.Component {
  state = {
    statement: " button clicked!",
    sentence: "",
  };

  something = {
    here: "we are here!!!",
  };

  hello() {
    return "hello!";
  }

  eventHandler = (param) => {
    this.setState((myState) => {
      if (param.target.name === "first") {
        return {
          sentence: "first" + myState.statement,
        };
      } else if (param.target.name === "second") {
        return {
          sentence: "second" + myState.statement,
        };
      } else if (param.target.name === "third") {
        return {
          sentence: "third" + myState.statement,
        };
      } else {
        return {
          sentence: "You didn't click one of these 3 buttons!",
        };
      }
    });
  };

  //   eventHandler = (param) => {
  //     console.log("parameter: ", param);
  //     // console.log(param.target.name, param.timeStamp, param.button);
  //     let s = this.state;
  //     // let statement = " button clicked!";
  //     // let sentence = "";
  //     if (param.target.name === "first") {
  //       return {
  //         sentence: "first" + s.statement,
  //       };
  //       //   s.sentence = "first" + s.statement;
  //     } else if (param.target.name === "second") {
  //       s.sentence = "second" + s.statement;
  //     } else if (param.target.name === "third") {
  //       s.sentence = "third" + s.statement;
  //     } else {
  //       s.sentence = "You didn't click one of these 3 buttons!";
  //     }
  //     console.log(s.sentence);
  //   };

  render() {
    return (
      <div>
        <button onClick={this.eventHandler} name="first">
          First
        </button>
        <br />
        <br />
        <button onClick={this.eventHandler} name="second">
          Second
        </button>
        <br />
        <br />
        <button onClick={this.eventHandler} name="third">
          Third
        </button>
        <br />
        <br />
        <h1>{this.state.sentence}</h1>
      </div>
    );
  }
}
