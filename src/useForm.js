import { useState } from "react";

export function useForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    // console.log("test input")
    console.log(event.target);
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  return {
    username: data.username,
    password: data.password,
    onInputChange: handleInputChange,
  };
}
