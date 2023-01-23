import { useEffect, useState } from "react";

export function Login(props) {
  // console.log(props.login);
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  // console.log(data["username"]);

  function handleChangeInput(e) {
    const { name, value, type, checked } = e.target;
    // console.log(name);
    // console.log([name]);
    // console.log(value);
    // console.log(checked);

    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleResetButton() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  function handleClickButton() {
    // When clicked, "the event handler attached to the button" should call an "onLogin" function
    onLogin();
  }

  function onLogin() {
    // passed as a prop to the Login component, passing it the state.
    console.log(props.login); // Nunber 1 this in order
    // setData({
    //   ...data,
    //   login: props.login,
    // });
    setData((myState) => {
      console.log(myState); // Nunber 3 this in order
      return {
        ...data,
        login: props.login,
      };
    });
    console.log(data); // Nunber 2 this in order
  }

  // useEffect(() => {
  //   console.log("here always");
  // });

  useEffect(() => {
    // console.log("here once");
    const button = document.getElementById("button"); // is it possible to use this statement as global, so that define once?
    const reset = document.querySelector("#reset");

    // console.log(button); // null if it was defined as global

    button.disabled = true;
    button.style.marginRight = 10 + "px";

    reset.disabled = true;
  }, []);

  useEffect(() => {
    console.log("data: ", data);
    // console.log("username: ", data.username);
    // console.log("password: ", data.password);
    // console.log("remember: ", data.remember);
    const button = document.getElementById("button");
    const reset = document.querySelector("#reset");
    if (data.username !== "" && data.password !== "") {
      button.disabled = false;
    } else {
      button.disabled = true;
    }

    if (
      data.username !== "" ||
      data.password !== "" ||
      data.remember !== false
    ) {
      reset.disabled = false;
    } else {
      reset.disabled = true;
    }
  }, [data]);

  const passwordLength = data.password.length;
  let loginButtonStyle;
  if (passwordLength !== 0) {
    loginButtonStyle = {
      backgroundColor:
        passwordLength > 0 && passwordLength < 8 ? "red" : "green",
      color: passwordLength > 0 && passwordLength < 8 ? "white" : "black",
    };
  }

  // console.log(passwordLength);
  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={handleChangeInput}
      />
      <br />
      <br />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChangeInput}
      />
      <br />
      <br />
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleChangeInput}
      />
      <br />
      <br />
      <button id="button" style={loginButtonStyle} onClick={handleClickButton}>
        Login
      </button>
      <button id="reset" onClick={handleResetButton}>
        Reset
      </button>
    </div>
  );
}

// import React from "react";

// export class Login extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     remember: false,
//   };

//   handleChangeInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     const type = e.target.type;
//     const checked = e.target.checked;

//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//       // [name]: name !== "remember" ? value : checked,
//     });
//   };

// handleClickButton = () => {
//   // When clicked, "the event handler attached to the button" should call an "onLogin" function
//   this.onLogin();
// };

// onLogin = () => {
//   // passed as a prop to the Login component, passing it the state.
//   this.setState((myState) => {
//     // console.log("props: ", this.props.login);
//     myState.login = this.props.login;
//     // console.log(myState);
//   });
//   // this.state.login = "test";
//   console.log(this.state);
// };

// handleResetButton = () => {
//   // const reset = document.querySelector("#reset");
//   this.setState({
//     username: "",
//     password: "",
//     remember: false,
//   });
// };

// componentDidMount() {
//   const button = document.getElementById("button"); // is it possible to use this statement as global, so that define once?
//   const reset = document.querySelector("#reset");

//   button.disabled = true; // here worked
//   button.style.marginRight = 10 + "px";

//   reset.disabled = true;
// }

// componentDidUpdate() {
//   // console.log("username: ", this.state.username);
//   // console.log("password: ", this.state.password);
//   // console.log("remember: ", this.state.remember);
//   const button = document.getElementById("button");
//   const reset = document.querySelector("#reset");
//   if (this.state.username !== "" && this.state.password !== "") {
//     button.disabled = false;
//   } else {
//     button.disabled = true;
//   }

//   if (
//     this.state.username !== "" ||
//     this.state.password !== "" ||
//     this.state.remember !== false
//   ) {
//     reset.disabled = false;
//   } else {
//     reset.disabled = true;
//   }
// }

// render() {
//   const passwordLength = this.state.password.length;
//   let loginButtonStyle;
//   if (passwordLength !== 0) {
//     loginButtonStyle = {
//       backgroundColor:
//         passwordLength > 0 && passwordLength < 8 ? "red" : "green",
//       color: passwordLength > 0 && passwordLength < 8 ? "white" : "black",
//     };
//   }

//   console.log(passwordLength);
//   return (
//     <div>
//       <input
//         name="username"
//         value={this.state.username}
//         onChange={this.handleChangeInput}
//       />
//       <br />
//       <br />
//       <input
//         name="password"
//         type="password"
//         value={this.state.password}
//         onChange={this.handleChangeInput}
//       />
//       <br />
//       <br />
//       <input
//         name="remember"
//         type="checkbox"
//         checked={this.state.remember}
//         onChange={this.handleChangeInput}
//       />
//       <br />
//       <br />
//       <button
//         id="button"
//         style={loginButtonStyle}
//         onClick={this.handleClickButton}
//       >
//         Login
//       </button>
//       <button id="reset" onClick={this.handleResetButton}>
//         Reset
//       </button>
//     </div>
//   );
// }
// }
