import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default Todos;
