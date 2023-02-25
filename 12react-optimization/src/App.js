import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowTogge] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  console.log("APP RUNNING");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  const allowToggeHandler = () => {
    setAllowTogge((prevAllowTogge) => !prevAllowTogge);
  };
  const listItems = useMemo(
    () => [5, 3, 1, 10, 9, 56, 7, 38, 3, 8, 0, 3, 49, 567],
    []
  );
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggeHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      <div>
        <DemoList title={listTitle} items={listItems} />
        <Button onClick={changeTitleHandler}>Change List Title</Button>
      </div>
    </div>
  );
}

export default App;
