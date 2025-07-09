import { useState } from "react";

function Example(propes){
    return(
        <ul>
            {propes.list.map((l,i)=>(
                <li key={i}>{l}</li>
            ))}
        </ul>
    )
}

export default Example