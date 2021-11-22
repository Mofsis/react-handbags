import React from "react";
import "./App";

function Tiles ({title, children, image, alt}) {
    return (
            <section>
                <h2>{title}</h2>
                {children}
                <img src={image} alt={alt}/>
            </section>
    );
}

export default Tiles;






