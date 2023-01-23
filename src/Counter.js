// import { useEffect, useState } from "react";
// import { useState } from "react";
import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
  // let [count, setCount] = useState(props.initialValue);

  // useEffect(() => {
  //   const countInterval = setInterval(() => {
  //     setCount((prevCount) => prevCount + props.incrementAmount);
  //   }, props.incrementInterval);

  //   return () => clearInterval(countInterval);
  // }, []);

  return (
    <div>
      <ClickCounter counter={props.initialValue} />
    </div>
  );
}

// import { useEffect, useState } from "react";
// // import { useState } from "react";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// // import { CounterDisplay } from "./CounterDisplay";

// export function Counter(props) {
//   // export function Counter({
//   //   initialValue = 5,
//   //   incrementAmount = 2,
//   //   incrementInterval = 2000,
//   // }) {
//   // console.log(props);
//   let [count, setCount] = useState(props.initialValue);
//   // let [data, setData] = useState({
//   //   initialValue,
//   //   incrementAmount,
//   //   incrementInterval,
//   // });

//   // console.log(data);
//   // WHY DIDN'T HERE WORK?
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     console.log("hello");
//   //     setCount((c) => c + 1);
//   //   }, 1000);
//   // });

//   // function setIntervalActivation(message) {
//   //   const testInterval = setInterval(() => {
//   //     console.log(message);
//   //   }, 2000);

//   //   clearInterval(testInterval);

//   //   // propFunction();
//   // }

//   // function propFunction(param) {
//   //   // function propFunction() {
//   //   // console.log("test");
//   //   // const testInterval = setInterval(() => {
//   //   setInterval(() => {
//   //     console.log(param);
//   //     // console.log("test");
//   //   }, 2000);

//   //   // setIntervalActivation(param);

//   //   // clearInterval(testInterval);

//   //   // setInterval(() => {
//   //   //   setCount((prevCount) => prevCount + props.incrementAmount);
//   //   //   // setData((prevCount) => console.log(prevCount));
//   //   //   // setData((prevCount) => prevCount.initialValue + data.incrementAmount);
//   //   // }, props.incrementInterval);
//   //   // // }, data.incrementInterval);
//   // }

//   function onCounterChange(param) {
//     console.log(param);
//     // setInterval(() => {
//     //   console.log(param);
//     //   // setCount((myState) => {
//     //   //   console.log(myState);
//     //   // });
//     // }, 2000);
//   }

//   // useEffect(() => {
//   //   // propFunction();
//   //   setInterval(() => {
//   //     setCount((prevCount) => prevCount + props.incrementAmount);
//   //     // setData((prevCount) => console.log(prevCount));
//   //     // setData((prevCount) => prevCount.initialValue + data.incrementAmount);
//   //   }, props.incrementInterval);
//   //   // }, data.incrementInterval);
//   // }, []);

//   // The WAY to set the default parameters here, BUT looks like NOT proper WAY to do it here. Better in App.js
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     setData((myData) => {
//   //       console.log(myData);
//   //       initialValue += incrementAmount; // without using any variable here,
//   //       console.log(initialValue);
//   //       return {
//   //         // ...myData,
//   //         initialValue: initialValue, // for here.
//   //       };
//   //     });
//   //   }, data.incrementInterval);
//   // }, []);

//   // First Way
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     setCount((prevCount) => prevCount + 1);
//   //   }, 1000);
//   // }, []);

//   // Second Way
//   useEffect(() => {
//     const countInterval = setInterval(() => {
//       setCount((prevCount) => prevCount + props.incrementAmount);
//     }, props.incrementInterval);

//     return () => clearInterval(countInterval);
//   }, []);

//   // useEffect(() => {
//   //   console.log(`Count now is ${count}`);
//   // }, [count]);

//   // function handleClickButton() {
//   //   console.log("clicked");
//   //   setCount((c) => c + 1);
//   // }

//   return (
//     <div>
//       {/* <button onClick={handleClickButton}>Counter</button> */}
//       {/* <p>{count}</p> */}
//       {/* <CounterDisplay count={count} /> */}
//       {/* <CounterDisplay count={data.initialValue} /> */}
//       {/* <ClickCounter counter={0} /> */}
//       <ClickCounter counter={onCounterChange} count={count} />
//       <ClickTracker />
//     </div>
//   );
// }

// import { useState } from "react";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { CounterDisplay } from "./CounterDisplay";

// // initial value of the counter, the increment interval and the increment amount are passed as props
// export function Counter(props) {
//   // export function Counter({ initialValue, incrementAmount, incrementInterval }) {
//   // console.log("props: ", props);
//   // console.log(
//   //   props.initialValue, // 0
//   //   props.incrementAmount, // 1
//   //   props.incrementInterval // 1000 miliseconds
//   // );
//   // console.log({
//   //   initialValue,
//   //   incrementAmount,
//   //   incrementInterval,
//   // });

//   // let number = 0;
//   let [count, setCounter] = useState(props.initialValue);
//   // const [count, setCounter] = useState(props.initialValue);
//   // const [count, setCounter] = useState(initialValue);
//   // const [count, setCounter] = useState({
//   //   initialValue,
//   //   incrementAmount,
//   //   incrementInterval,
//   // });

//   console.log("count: ", count);
//   // console.log("initialValue: ", props.initialValue + props.incrementAmount);
//   // console.log("initialValue: ", initialValue + incrementAmount);
//   // setCounter((c) => console.log(c + 1));

//   // WHY DIDN'T THIS WORK? (1. WAY)
//   // setInterval(() => {
//   //   setCounter((c) => c + 1);
//   // }, 1000);

//   // setInterval(() => {
//   //   count++;
//   //   setCounter((c) => c + count);
//   // }, 1000);

//   // setInterval(() => {
//   //   number++;
//   //   console.log("hello" + number);
//   // }, 1000);

//   // 2. WAY
//   // setInterval(() => {
//   //   setCounter((data) => {
//   //     console.log("data: ", data);
//   //     return {
//   //       // ...data, // error here
//   //       // count: count + 1,
//   //       // ...props,
//   //       initialValue: count + 1,
//   //     };
//   //   });
//   // }, 1000);

//   // setInterval(() => {
//   //   // WHY DIDN'T HERE WORK? (3. WAY)
//   //   // setCounter({
//   //   //   initialValue: count + incrementAmount,
//   //   // });

//   // 4. WAY
//   //   setCounter((data) => {
//   //     console.log(data.initialValue);
//   //     return {
//   //       // data, // updating and also creating new date object less than 1 second
//   //       ...data, // updating here less than 1 second
//   //       initialValue: data.initialValue + 1,
//   //     };
//   //   });
//   // }, incrementInterval);

//   return (
//     <div>
//       {/* <CounterDisplay count={count.initialValue} /> */}
//       <CounterDisplay count={count} />
//       <ClickCounter counter={0} />
//       <ClickTracker />
//     </div>
//   );
// }

// import { useState } from "react";

// export function Counter() {
//   const [count, setCount] = useState(5);
//   // function handleUpdateCount() {
//   // First Way
//   // setInterval(() => {
//   // setCount((c) => c + 1);
//   // }, 1000);

//   // Second Way didn't work
//   // setCount((c) => setInterval(() => c + 1, 1000));

//   // Third Way didn't work
//   // setInterval(() => {
//   //   setCount({
//   //     count: count + 1,
//   //   });
//   // }, 1000);

//   // Forth Way didn't work
//   // setInterval(() => {
//   //   setCount((c) => {
//   //     return {
//   //       c: count + 1,
//   //     };
//   //   });
//   // }, 1000);
//   // }

//   // handleUpdateCount();

//   // setInterval(() => {
//   //   setCount((c) => c + 1);
//   //   // setCount((data) => {
//   //   //   // console.log(data);
//   //   //   return {
//   //   //     data: count + 1,
//   //   //   };
//   //   // });
//   // }, 1000);

//   return (
//     <div>
//       {/* <p>Counter: {count}</p> */}
//       {/* <button onClick={handleUpdateCount}>Increment</button> */}
//       {/* <button onClick={handleUpdateCount}>Increment</button> */}
//     </div>
//   );
// }

// import React from "react";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { CounterDisplay } from "./CounterDisplay";
// // initial value of the counter, the increment interval and the increment amount are passed as props
// export class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => {
//         return {
//           count: state.count + this.props.incrementAmount,
//         };
//       });
//     }, this.props.incrementInterval);
//   }

//   render() {
//     return (
//       <div>
//         <CounterDisplay count={this.state.count} />
//         <ClickCounter counter={0} />
//         <ClickTracker />
//       </div>
//     );
//   }
// }
