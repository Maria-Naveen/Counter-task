import { useState } from "react";
import Counter from "./components/Counter";
const App = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((x) => x + 1);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <Counter count={count} onClick={handleCount}></Counter>
    </div>
  );
};

export default App;
