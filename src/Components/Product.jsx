import { useState } from "react";

function Product({ obj = [] }) {
    return (
        <div>
            <ul>
                {obj.map((p, i) => (
                    <li key={i}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
}


export default Product;