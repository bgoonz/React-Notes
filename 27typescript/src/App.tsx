import React from "react";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos
        items={["learn react", "learn typescript", "learn javascript", "stuff"]}
      />
    </div>
  );
}

export default App;
