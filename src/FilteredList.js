import { useMemo } from "react";

// export function FilteredList(props) {
export function FilteredList({ peopleList }) {
  //   console.log(props);
  //   console.log(props.peopleList);
  //   console.log(typeof props);
  //   props.filter((el) => el);
  //   const result = props.filter((el) => el.age > 18);
  //   console.log(result);
  console.log(peopleList);
  //   peopleList.filter((el) => console.log(el.age > 18)); // returns "true" 4 times
  // const result = peopleList.filter((el) => el.age > 18);
  // console.log(result);
  //   peopleList.filter((el) => console.log(el));

  //   DIDN'T WORK
  function showFilteredPeople(array) {
    return array.map((el) => (el.age > 18 ? `${el.name}, ` : "")); // WHY filter didn't work HERE?
  }

  const result = useMemo(() => showFilteredPeople(peopleList), [peopleList]); // IS THIS DEPENDENCY CORRECT as "peopleList" ?
  // const showFilteredPeople = useMemo(peopleList.filter((el) => el.age > 18),[]);
  console.log(result);

  return (
    <div>
      <br />
      <br />
      {/* <label>
        People who are older than 18 years old: {showFilteredPeople.name}
      </label> */}
      {/* <label>
        People who are older than 18 years old:{" "}
        {peopleList.map(
          // WHY filter didn't work?
          (el, index) => (
            <span key={el + index}>
              {el.age > 18 ? <span>{el.name}, </span> : ""}
            </span>
          )
        )}
      </label> */}
      {/* WITH "useMemo" */}
      <label>People who are older than 18 years old: {result}</label>
      {/* <div>
        <label>
          İd:{" "}
          {peopleList.map((el, index) => (
            <span key={el + index}>
              {el.age > 18 ? <span>{el.id}, </span> : ""}
            </span>
          ))}
        </label>
        <br />
        <br />
        <label>
          Name:{" "}
          {peopleList.map((el, index) => (
            <span key={el + index}>
              {el.age > 18 ? <span>{el.name}, </span> : ""}
            </span>
          ))}
        </label>
        <br />
        <br />
        <label>
          Age:{" "}
          {peopleList.map((el, index) => (
            <span key={el + index}>
              {el.age > 18 ? <span>{el.age}, </span> : ""}
            </span>
          ))}
        </label>
      </div> */}
    </div>
  );
}

// {
//   /* {peopleList.filter((el) => {
//           <span>{el.id}</span>;
//         })} */
// }
// {
//   /* key={el + index} username={el} */
// }
// //   <span key={"person" + index}>{el}</span> // Uncaught Error: Objects are not valid as a React child (found: object with keys {id, name, age})

// {
//   /* {peopleList.filter((el) => el)} */
// }
// {
//   /* {peopleList.map((el, index) => (
//           <span key={"answers" + index}>{el.id}, </span>
//         ))} */
// }
