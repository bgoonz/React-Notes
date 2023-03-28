import { useState } from "react";
import Output from "./Output";
const Greeting = () => {
    const [ changeText, setChangeText ] = useState( false );
    const changeTextHandler = () => { 
        setChangeText( () => {
            return !changeText;
        } );
    }
  return (
    <div>
      <h1>Hello World!</h1>
          {!changeText?<Output>Nice to meet you!</Output>:<Output>Changed!</Output>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
