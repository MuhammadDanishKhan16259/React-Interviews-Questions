import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import QuestionCards from "./components/QuestionCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QuestionCards />
    </>
  );
}

export default App;
