import React from "react";

function Productss({product}){

    const {name,price}=product
    return(
        <div>
        <h2>{name}</h2>
        <p>{price}</p>
        </div>
    )
}
export default Productss;