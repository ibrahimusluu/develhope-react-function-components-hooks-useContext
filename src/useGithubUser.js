import { useEffect, useState } from "react";

export function useGithubUser(param) {
  // console.log(param);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchData(uname) { // no problem without 'async' and 'await'
  async function fetchData(uname) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${uname}`);
      const json = await response.json();
      console.log("NEW GITHUB USER NAME: ", json.name);
      if (response.status !== 200) {
        setError(new Error());
      }

      setData(json);
      // console.log(data);
    } catch (error) {
      console.log("Error: ", error);
      setError(error);
      setData(null);
      // throw error;
    } finally {
      setLoading(false);
    }

    // await fetch(`https://api.github.com/users/${uname}`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     console.log("NEW GITHUB USER NAME: ", json.name);

    //     setData(json);
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log("Error: ", err);
    //     setError(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }

  useEffect(() => {
    fetchData(param);
  }, [param]);

  if (data) {
    return { data, name: data.name, error: error, loading };
  } else {
    return { data: [], message: "No Data!", error, loading };
  }

  // if (data) {
  //   return {
  //     data: data,
  //     name: data.name,
  //     loading: loading,
  //     error: error,
  //   };
  // } else {
  //   return {
  //     data: [],
  //     message: "No Data!",
  //     error: error,
  //   };
  // }
}
