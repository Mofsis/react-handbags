import React from "react";
import "./App";

function Button ({buttonName, disable, log}) {
    return (
        <button type="button" onClick={ () => {
            console.log({log});
        }} disabled={disable}>
            {buttonName}
        </button>
    );
}

export default Button;