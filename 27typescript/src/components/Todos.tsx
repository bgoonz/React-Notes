import React from "react";
import Todo from "../models/todo";
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

/*this is a comment*/

export default Todos;
