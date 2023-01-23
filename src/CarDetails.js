import { useEffect, useRef, useState } from "react";

export function CarDetails(props) {
  //   console.log(props);
  const [form, setForm] = useState({
    model: "",
    year: "",
    color: "",
  });
  console.log(form);
  const formRef = useRef(props); // Uncaught Error: "Function components cannot have string refs. We recommend using useRef() instead", Solution: we need to use "formRef" in form tag, not in input tag like "formRef.current.model"
  //   const formRef = useRef();
  console.log(formRef.current);

  useEffect(() => {
    console.log(formRef.current.model);
    // Default Values from Props to define Here. With "useRef", we can interact the DOM.
    formRef.current.model.value = props.model;
    formRef.current.year.value = props.year;
    formRef.current.color.value = props.color;
  }, []);

  function handleInputChange(event) {
    // console.log(event.target.name);
    /* Warning: A component is changing a controlled input to be uncontrolled. 
    This is likely caused by the value changing from a defined to undefined, which should not happen. 
    Decide between using a controlled or uncontrolled input element for the lifetime of the component. */
    // setForm(event.target.value);
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleResetButton() {
    setForm({
      model: props.model,
      year: props.year,
      color: props.color,
    });
  }

  return (
    <form ref={formRef}>
      <br />
      MY CAR <br />
      {/* model, year, color */}
      <input
        // ref={formRef.current.model} // HERE doesn't work
        name="model"
        // value={form.model}
        onChange={handleInputChange}
        placeholder="Enter Model..."
      />{" "}
      <br /> <br />
      <input
        // ref={formRef.current.year}
        name="year"
        // value={form.year}
        onChange={handleInputChange}
        placeholder="Insert Year..."
      />{" "}
      <br /> <br />
      <input
        // ref={formRef.current.color}
        name="color"
        // value={form.color}
        onChange={handleInputChange}
        placeholder="Declare Color..."
      />{" "}
      <br /> <br />
      <button type="reset" onClick={handleResetButton}>
        Reset Form
      </button>{" "}
      {/* no need onClick handler here, we declare it with "type" of button if we don't get "uncontrolled" error */}
    </form>
  );
}
