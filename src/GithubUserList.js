// import { GithubUser } from "./GithubUser";

import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

// export function GithubUserList({ usernames }) {
export function GithubUserList() {
  // console.log(usernames);
  const [data, setData] = useState({ username: "" });
  // const [list, setList] = useState(usernames);
  // const [list, setList] = useState([]);
  const [list, setList] = useState({ usernames: [] });
  // console.log("data: ", data);
  // console.log("typeof list: ", typeof list);
  // console.log("typeof usernames: ", typeof list.usernames);
  // console.log("list: ", list); // here shown as index number or length of element(s)
  //   const userList = ["test", "test2", "test3"];

  function handleInputUsernameChange(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);

    setData({
      // ...data, // no need this, because we have only 1 data
      [name]: value,
    });

    // setData((uname) => {
    //   return {
    //     ...uname,
    //     [name]: value,
    //   };
    // });
  }

  function handleClickAddButton() {
    // const inputUsername = document.getElementsByName("username");
    // console.log("data: ", data);
    // console.log("list:", list); // list becomes "object" here for second click when we send here prop as an array from App.js
    // console.log("username: ", data.username);
    // const updatedArray = list; // didn't work
    // const updatedArray = list.usernames; // worked
    // console.log("typeof updatedArray: ", typeof updatedArray);
    // console.log("updatedArray: ", updatedArray);
    // updatedArray.push(data.username); // HERE --> Uncaught TypeError: updatedArray.push is not a function
    // list.push(data.username); // HERE --> Uncaught TypeError: list.push is not a function
    // console.log("updatedArray: ", updatedArray);
    // console.log("list: ", list);

    // setList({
    //   // list,
    //   ...list, // worked
    //   // list: updatedArray,
    // });

    setList((myState) => {
      // console.log("username: ", data.username);
      // console.log("myState: ", myState);

      // return myState.push(data.username); // didn't work, typeof list turned to "number" from "object"(as an array)
      // return myState.usernames.push(data.username); // didn't work, typeof list turned to "number" from "object"(as an array)
      // myState.push(data.username); // didn't work

      myState.usernames.push(data.username); // worked
      // console.log("myState: ", myState);
      // console.log("list:", list);
      return {
        ...myState,
      };

      // return list.push({ // didn't work, typeof list turned to "number" from "object"(as an array)
      //   myState: data.username,
      // });

      // return list.usernames.push(data.username); // didn't work, typeof list turned to "number" from "object"(as an array)
    });
    // console.log("list again: ", list);
    // inputUsername[0].value = "";
    // document.getElementsByName("username")[0].value = ""; // here didn't work.
  }

  // useEffect(() => {
  //   console.log("username: ", data.username);
  // }, [data]);

  useEffect(() => {
    console.log("list: ", list);
    const inputUsername = document.getElementsByName("username")[0];
    inputUsername.value = "";
    inputUsername.focus();
  }, [list]);

  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={handleInputUsernameChange}
        autoComplete="off"
      />
      <button onClick={handleClickAddButton}>Add To List</button>
      {/* <h1>GithubUserList: {list.map((el) => el + ", ")} </h1> */}
      {/* <h1>GithubUserList: {list.usernames.map((el) => el + ", ")} </h1> */}
      <h1>
        {/* GithubUserList:
        {list.usernames.map(
          (el, index) => (
            console.log("index: ", index),
            (<GithubUser key={el + index} username={el} />)
          )
        )} */}
        {/* {list.usernames.map((el, index) => console.log(el + index))} */}
        <span>GithubUserList: </span>
        {list.usernames.map((el, index) => (
          <GithubUser key={el + index} username={el} />
        ))}
      </h1>

      {/* <h1>
        GithubUserList: <GithubUser username="ibrahimuslu" />
      </h1> */}
    </div>
  );
}
