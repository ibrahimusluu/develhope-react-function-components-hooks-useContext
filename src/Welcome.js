// import React from "react";
import { Age } from "./Age";

export function Welcome({ name = "someone", age }) {
  console.log(name);
  console.log(age);
  return (
    <div className="welcome">
      <p>Welcome, {name}</p>
      <p>
        {age > 18 && age < 65 && name === "John" && <Age age={age} />}
        {!age && ""}
      </p>
    </div>
  );
}

// Second Way
// export function Welcome(props) {
//   console.log(props);
//   return (
//     <div className="welcome">
//       <p>Welcome, {props.name}</p>
//       <p>
//         {props.age > 18 && props.age < 65 && props.name === "John" ? (
//           <Age age={props.age} />
//         ) : (
//           ""
//         )}
//       </p>
//     </div>
//   );
// }

// export class Welcome extends React.Component {
//   static defaultProps = {
//     // here defaultProps is a special keyword we must use.
//     name: "stranger",
//   };

//   render() {
//     return (
//       <div className="welcome">
//         <p>Welcome, {this.props.name}!</p>
//         <p>
//           {this.props.age > 18 &&
//           this.props.age < 65 &&
//           this.props.name === "John" ? (
//             <Age age={this.props.age} />
//           ) : (
//             ""
//           )}
//         </p>
//         {/* Second Way John */}
//         {/* {this.props.age > 18 &&
//           this.props.age < 65 &&
//           this.props.name === "John" && <Age age={this.props.age} />}
//         {!this.props.age && ""} */}
//       </div>
//     );
//   }
// }
