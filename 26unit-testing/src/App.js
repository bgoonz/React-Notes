import Greeting from "./components/Greeting";
import Async from "./components/Async";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greeting />
      <hr />
      <Async />
    </div>
  );
}

export default App;
