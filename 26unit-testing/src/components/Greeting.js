import { useState } from "react";

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
          {!changeText?<p>Nice to meet you!</p>:<p>Changed!</p>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
