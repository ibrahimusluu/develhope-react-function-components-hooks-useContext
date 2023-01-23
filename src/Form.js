import { useForm } from "./useForm";

export function Form() {
  const { username, password, onInputChange } = useForm(); // destructuring here
  return (
    <div>
      <input
        name="username"
        value={username}
        onChange={onInputChange}
        autoComplete="off" // to remove suggestions
      />
      <input
        name="password"
        value={password}
        type="password"
        onChange={onInputChange}
      />
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
}
