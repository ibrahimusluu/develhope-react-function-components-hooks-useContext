import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  // console.log(username);
  const { data, name, loading, error, message } = useGithubUser(username);
  console.log("data: ", data);
  console.log("loading: ", loading);
  console.log("error: ", error); // ERROR returns always "NULL", if we don't use "new Error()"

  // return (
  //   <div>
  //     {loading && <h1>Loading... </h1>}
  //     {error && <h1>ERRORRRRRRRRRRRRRRR</h1>} // HERE WORKED
  //   </div>
  // );

  if (data) {
    return (
      <span>
        {name ? (
          <span>
            {username === "ibrahimusluu" ? (
              <span>
                {loading && <span>Loading... </span>}
                {error && <span>{error}</span>}
                <b style={{ color: "red" }}>Default GitHub Username: </b> {name}
                ,
              </span>
            ) : (
              <span>{name}, </span>
            )}
          </span>
        ) : (
          <span>
            {loading && <span>Loading... </span>}
            {error && <span>{error}</span>}
            <span style={{ color: "red" }}> " No Name of '{username}' ", </span>
          </span>
        )}
        <span style={{ color: "red" }}>
          {error && <h1>ERRORRRRRRRRRRRRRRR</h1>} {/* HERE DIDN'T WORK, WHY? */}
        </span>
      </span>
    );
  } else {
    return (
      <span>
        {message}
        {error && <span>{error}</span>}
      </span>
    );
  }

  // if (data) {
  //   console.log(data.name);
  //   console.log(username);
  //   let toggleSwitcher = false;
  //   return (
  //     <span>
  //       {data.name ? (
  //         <span>
  //           {username === "ibrahimusluu" ? (
  //             <span>
  //               {(toggleSwitcher = true)}
  //               {toggleSwitcher ? (
  //                 <span>
  //                   <b>Default GitHub Username: </b> {data.name},
  //                 </span>
  //               ) : (
  //                 <span>{data.name}, </span>
  //               )}
  //             </span>
  //           ) : (
  //             <span>{data.name}, </span>
  //           )}
  //         </span>
  //       ) : (
  //         <span style={{ color: "red" }}> " No Name of '{username}' ", </span>
  //       )}
  //     </span>
  //   );
  // } else {
  //   return <span>No Data!</span>;
  // }

  // import { useEffect, useState } from "react";
  // // import { GithubUserList } from "./GithubUserList";

  // // export function GithubUser() {
  // export function GithubUser({ username }) {
  //   console.log(username);
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     // fetch(`https://api.github.com/users/ibrahimusluu`)
  //     fetch(`https://api.github.com/users/${username}`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((json) => {
  //         console.log("NEW GITHUB USER NAME: ", json.name);

  //         setData(json);
  //       })
  //       .catch((err) => {
  //         console.log("Error: ", err);
  //       });
  //     // }, []); // worked also, but "warning" --> React Hook useEffect has a missing dependency: 'username'. Either include it or remove the dependency array
  //   }, [username]); // worked

  //   // useEffect(() => {
  //   //   // console.log("NEW GITHUB USER NAME: ", data.name ?? "null");
  //   //   // console.log(data.name);
  //   //   // if (data.name === undefined) {
  //   //   //   console.log("NULL");
  //   //   // }
  //   //   if (null != null) {
  //   //     console.log(true);
  //   //   }
  //   // }, [data]);

  //   if (data) {
  //     console.log(data.name);
  //     console.log(username);
  //     return (
  //       <span>
  //         {data.name ? (
  //           <span>
  //             <b>Default GitHub Username: </b> {data.name},{" "}
  //           </span>
  //         ) : (
  //           <span style={{ color: "red" }}> " No Name of '{username}' ", </span>
  //         )}
  //       </span>
  //     );
  //   } else {
  //     return (
  //       // <div>
  //       // {/* <p>GithubUser: {data && <span>{data.name}</span>}</p> */}
  //       // {/* <GithubUserList /> */}
  //       // {/* </div> */}
  //       // <span>{data && data.name}</span>
  //       <span>
  //         No Data!
  //         {/* here didn't work (because of logic problemi should check about "name" of data, not itself of data) */}
  //         {/* {data && <span>{data.name}</span>}
  //         {!data && <span>"No Name of "{username}"</span>} */}
  //         {/* {data ? <span>{data.name}</span> : <span>"No Name of "{username}"</span>} */}
  //       </span>
  //     );
  //   }

  // if (data) {
  //   return (
  //     <div>
  //       <span>
  //         {data.name ? (
  //           <span>{data.name}, </span>
  //         ) : (
  //           <span style={{ color: "red" }}> " No Name of '{username}' ", </span>
  //         )}
  //       </span>
  //       {/* <GithubUserList /> HERE DIDN'T WORK :) */}
  //     </div>
  //   );
  // } else {
  //   return <span>No Data!</span>;
  // }
}

// export function GithubUser() {
//   const [data, setData] = useState(null);
//   // let name = "";

//   // THIS WAY DIDN'T WORK
//   useEffect(() => {
//     fetch(`https://api.github.com/users/ibrahimusluu`)
//       .then((response) => {
//         //   console.log(response);
//         console.log("Response status: ", response.status);
//         // console.log(response.json()); // don't execute the "response.json()" twice.
//         // return "b";
//         return response.json();
//       })
//       .then((a) => {
//         console.log("a: ", a);
//         setData(a);
//         console.log(data);
//       }); // a become "b" if the return is b in previous "then"
//   }, []);

//   useEffect(() => {
//     // console.log(data);
//     fetch(`https://api.github.com/users/ibrahimusluu`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         console.log("json: ", json);
//         // Without "State"
//         // name = json.name;
//         // console.log(name);

//         setData(json);
//         console.log(data);
//       });
//   }, [data]);

//   useEffect(() => {
//     // console.log(data);
//     fetch(`https://api.github.com/users/ibrahimusluu`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         console.log("json: ", json);

//         setData(json);
//       });
//   }, []);

//   useEffect(() => {
//     console.log("what happens here: ", data);
//   }, [data]);

//   return (
//     <div>GithubUser: {data && <h1>{data.name}</h1>}</div>
//     // <div>GithubUser: </div>
//     // <div>
//     //   <div>GithubUser: {data && <h1>{data}</h1>}</div>
//     //   <p>GithubUser: {data && <h1>{data.name}</h1>}</p>
//     // </div>
//   );
// }
