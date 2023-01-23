import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  // Another Way to use Refs
  // constructor(props) {
  //   super(props)
  //   this.refs = React.createRef()
  // }

  handleFormSubmit = (event) => {
    event.preventDefault(); // "enter" keybutton works in Uncontrolled Components than Controlled Ones.

    // const username = event.target.elements.username.value;
    // const password = event.target.elements.password.value;
    // const remember = event.target.elements.remember.checked;

    // console.log({
    //   username,
    //   password,
    //   remember,
    // });

    this.onLogin();
  };

  onLogin = () => {
    const form = this._formRef.current.elements;
    if (form.username.value === "İbrahim" && form.password.value === "Uslu") {
      form.login = {
        status: "success :)",
      };
    } else {
      form.login = this.props.login;
    }
    // console.log("onLogin: ", this._formRef.current.elements);
    console.log(this._formRef.current.elements.login.status);
  };

  defaultValues(param) {
    param.username.value = "İbrahim";
    param.password.value = "Uslu";
    param.remember.checked = true;
  }

  componentDidMount() {
    const form = this._formRef.current.elements;
    // console.log("before: ", form);

    this.defaultValues(form);

    // console.log("after: ", form);

    const usernameInput = document.getElementsByName("username");
    // const usernameInput = document.getElementById("user");
    const submitButton = document.getElementById("submit");
    const resetButton = document.querySelector("#reset");

    // console.log(usernameInput[0].autofocus);

    usernameInput[0].focus();
    // usernameInput[0].autofocus = true;
    // console.log(usernameInput[0].autofocus);
    // usernameInput.disabled = true;
    submitButton.disabled = true;
    resetButton.disabled = true;
    submitButton.style.marginRight = 10 + "px";

    // for submit button
    if (form.username.value !== "" && form.password.value !== "") {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }

    // for reset button
    if (
      form.username.value !== "" ||
      form.password.value !== "" ||
      form.remember.checked !== false
    ) {
      resetButton.disabled = false;
    } else {
      resetButton.disabled = true;
    }
  }

  componentDidUpdate() {
    console.log("here doesn't work"); // WHY? Does this lifecycle method NOT work in Uncontrolled Components?
  }

  render() {
    return (
      <div>
        <h1>UncontrolledLogin Component</h1>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input id="user" name="username" />
          <br />
          <br />
          <input name="password" type="password" />
          <br />
          <br />
          <input name="remember" type="checkbox" />
          <br />
          <br />
          <button id="submit" type="submit">
            Login
          </button>
          <button id="reset" type="reset">
            Reset
          </button>
        </form>
      </div>
    );
  }
}
