// Counter App with Hooks
import React, {useState} from "react";

const HookCounter = () => {
    const [value, setValue] = useState(0);
    return(
        <div className="container">
            <h1>Count : {value}</h1>
            <div className="btns">
                <button type="button" onClick={() => setValue(value - 1)} id="dec">Decrement</button>
                <button type="button" onClick={() => setValue(0)} id="res">Reset</button>
                <button type="button" onClick={() => setValue(value + 1)} id="inc">Increment</button>
            </div>
        </div>
    );
}
export default HookCounter;