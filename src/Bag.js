import React from "react";
import "./App";

function Bag ({sale, bagName, price, image, alt}) {
    return (
        <article>
                <span>
                  {sale}
                </span>
            <img src={image} alt={alt}/>
            <p>
                {bagName}
            </p>
            <h4>
                {price}
            </h4>
        </article>
    );
}

export default Bag;