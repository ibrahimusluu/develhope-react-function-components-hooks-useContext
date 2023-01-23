import ReactDOM from "react-dom"; // {ReactDOM} is wrong and cannot be recognized in this way, What is the difference with {} and without it?
import { App } from "./App";
import "./index.css";

ReactDOM.render(<App />, document.querySelector("#root"));
