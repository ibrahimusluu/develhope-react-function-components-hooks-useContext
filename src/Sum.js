export function Sum({ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
  console.log(numbers);
  return (
    <div>
      <p>numbers: {numbers}</p>
      <h1>sum: {numbers.reduce((prev, next) => prev + next, 0)}</h1>
    </div>
  );
}

// Second Way
// export function Sum(props) {
//   // console.log(props); // numbers: (5) [1, 2, 3, 4, 5]
//   console.log(props.numbers); // (5) [1, 2, 3, 4, 5]
//   console.log(props.numbers.reduce((prev, next) => prev + next, 0));

//   // props.numbers.reduce(
//   //   (prev, next) =>
//   //     console.log("prev: ", prev, "next: ", next, "prev + next: ", prev + next),
//   //   0
//   // );

//   // console.log(
//   //   props.numbers.reduce(
//   //     (prev, next) =>
//   //       console.log(
//   //         "prev: ",
//   //         prev,
//   //         "next: ",
//   //         next,
//   //         "prev + next: ",
//   //         prev + next
//   //       ),
//   //     1
//   //   )
//   // );
//   return (
//     <div>
//       {/* {props} gives error because of array*/}
//       <p>numbers: {props.numbers}</p>
//       <h1>sum: {props.numbers.reduce((prev, next) => prev + next, 0)}</h1>
//     </div>
//   );
// }
