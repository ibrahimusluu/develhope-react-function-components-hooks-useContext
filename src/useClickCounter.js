// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.

import { useCallback, useState } from "react";

export function useClickCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCount((c) => c + 1);
  }, []);

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCount((c) => c - 1);
  }, []);

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCount(initialValue);
    },
    [initialValue]
  );

  return {
    count: count,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
