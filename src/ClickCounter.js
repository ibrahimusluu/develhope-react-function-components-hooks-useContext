import { useClickCounter } from "./useClickCounter";

export function ClickCounter({ counter }) {
  const { count, onIncrement, onDecrement, onReset } = useClickCounter(counter);

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
      <p>{count}</p>
    </div>
  );
}

// // import { useEffect, useState } from "react";
// // import { useState } from "react";
// import { useEffect } from "react";

// // export function ClickCounter(props) {
// export function ClickCounter({ counter, count }) {
//   // console.log(props());
//   // counter();
//   // counter("test");
//   // const [count, setCount] = useState(counter);
//   // console.log(count);

//   // useEffect(() => {
//   //   // console.log("always"); // here is rendering whenever Counter Component rendered
//   //   counter("test");
//   // }); // always running if it is without "Second Parameter"

//   // BUT, we made "this useEffect" hook pretend like "always running"
//   // useEffect(() => {
//   //   // console.log(`initial count: ${count}`);
//   //   counter(count);
//   //   // counter(5);
//   // }, []); // once if it is with "Second Empty Parameter" as an array

//   useEffect(() => {
//     // console.log(`updated count in useEffect: ${count}`);
//     counter(count); // calling "onCounterChange" function with current value here.
//   }, [count]); // whenever "count" is updated.

//   // function handleCounterIncrement() {
//   //   setCount((c) => c + 1);

//   //   // HERE DIDN'T WORK, WHY?
//   //   // setCount({
//   //   //   count: count + 1,
//   //   // });

//   //   // HERE DIDN'T WORK, WHY?
//   //   // setCount((c) => {
//   //   //   console.log(c);
//   //   //   return {
//   //   //     ...count,
//   //   //     count: c + 1,
//   //   //   };
//   //   // });
//   // }

//   return (
//     <div>
//       {/* <button onClick={handleCounterIncrement}>Click Me!</button> */}
//       <p>{count}</p>
//     </div>
//   );
// }

// import React from "react";

// export class ClickCounter extends React.Component {
//   state = {
//     counter: this.props.counter,
//   };
//   handleCounterIncrement = () => {
//     this.setState((state) => {
//       //   this.state.counter += 1; // WHY NOT IN THIS WAY?
//       //   console.log(this.state.counter);
//       return {
//         counter: state.counter + 1,
//       };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleCounterIncrement}>Click Me!</button>
//         <p>{this.state.counter}</p>
//       </div>
//     );
//   }
// }
