import React from "react";
import ExpenseItem from "./components/ExpenseItem";
// JSX is short for javascript xml (html is a kind of xml?)
function App() {
  // we return html code inside of a javascript file... this is not valid js code ... it is JSX which is a special syntax invented by the react team
  // In regular javascript you would use an imperative approach
  //document.getElementById('root')
  // const pararaph = document.createElement('p')
  // paragraph.textContent = 'this is also  visible'
  //document.getElementById('root').append(paragraph)
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>

    </div>
  );
}

export default App;
