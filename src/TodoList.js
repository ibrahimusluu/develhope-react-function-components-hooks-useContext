import React from "react";

const inputTitle = document.getElementsByName("todo_title"); // getElementsByName works and returns an array names of elements (same name elements)
// const addButton = document.getElementById("add_button"); // getElementById cannot be seen in lifecycles, i think because of "render" method
// const resetButton = document.querySelector("#reset_button"); // querySelector cannot be seen in lifecycles, i think because of "render" method
// const liTags = document.getElementsByTagName("li");

export class TodoList extends React.Component {
  state = {
    // dummy data
    items: [
      { id: 1, title: "Call Katherine about the trip", completed: false },
      { id: 2, title: "Buy tickets", completed: true },
      { id: 3, title: "Finish the presentation", completed: false },
      { id: 4, title: "Invite John", completed: true },
      { id: 5, title: "Rent a car", completed: false },
    ],
  };

  handleClickAddButton = () => {
    let idCounter = this.state.items.length + 1;

    this.setState((myState) => {
      // console.log("here later");
      return myState.items.push({
        id: idCounter,
        title: inputTitle[0].value,
        completed: false,
      });
    });
    // console.log("here first");
  };

  handleClickResetButton = () => {
    console.log("we are here!");
    // setState triggers "componentDidUpdate"
    this.setState((myState) => {
      return (myState.items = []);
      // myState.items = []; // this doesn't work, we need to use "return" keyword to trigger "componentDidUpdate"
    });

    // Second Way of "setState"
    // this.setState({
    //   items: [],
    // });

    console.log("items: ", this.state.items);
  };

  handleClickRemoveButton = (param) => {
    console.log("my parameter from 'render props' in App Component : ", param);

    // const removedArray = this.state.items;

    this.state.items.splice(param, 1);
    console.log(this.state.items);
    // console.log(removedArray);

    this.setState({
      items: this.state.items,
    });

    // console.log(this.state.items);

    // this.setState((myState) => {
    //   console.log(myState[param]);
    //   return {
    //     //
    //   };
    // });

    // this.setState((myState) => {
    //   console.log(myState[param]);
    //   myState[param].remove();
    //   console.log(this.state.items);
    //   return {
    //     // items: myState[param].remove(),
    //   };
    // });

    // console.log(liTags);
    // console.log(liTags[param]);
    // liTags[param].remove();
    // console.log(param.target.parentElement);
    // console.log(param.target.parentNode);
  };

  componentDidMount() {
    const addButton = document.getElementById("add_button");
    const removeButtons = document.getElementsByClassName("remove_buttons");

    // console.log(removeButtons);

    for (let i = 0; i < removeButtons.length; i++) {
      // console.log(removeButtons[i]);
      removeButtons[i].style.marginLeft = 25 + "px";
      removeButtons[i].style.marginBottom = 15 + "px";
    }

    // WHY did map, filter and forEach not work here?
    // removeButtons.map((el) => {
    //   el.style.marginLeft = 10 + "px";
    // });

    // removeButtons.filter((el) => {
    //   el.style.marginLeft = 10 + "px";
    // });

    // removeButtons.forEach((el) => {
    //   el.style.marginLeft = 10 + "px";
    // });

    console.log("componentDidMount: ", this.state.items);
    // console.log("addButton: ", addButton);
    addButton.style.marginRight = 10 + "px";
    // console.log(this.props.todos);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: ", this.state.items);
    inputTitle[0].value = "";
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.items, this.handleClickRemoveButton)}
        {/* Second Way */}
        {/* {this.props.children(this.state.items, this.handleClickRemoveButton)} */}

        {/* <ul> */}
        {/* {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))} */}
        {/* {this.state.items.map((item, index) => (
            <li key={item + index}>{item.title}</li>
          ))} */}
        {/* {this.state.items.map((item, index) => (
            <li key={item.id}>
              {item.title}
              <button
                className="remove_buttons"
                onClick={() => this.handleClickRemoveButton(index)}
                // onClick={(e) => {
                //   this.handleClickRemoveButton(e.target);
                // }}
              >
                Remove the Item
              </button>
            </li>
          ))} */}
        {/* </ul> */}
        <input id="todo_title" name="todo_title" />
        <br />
        <br />
        <button id="add_button" onClick={this.handleClickAddButton}>
          Add to List
        </button>
        <button id="reset_button" onClick={this.handleClickResetButton}>
          Reset the List
        </button>
      </div>
    );
  }
}
