import React, { useState } from 'react';


function Demo() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }


    function addItem() {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    }

    return (
        <div >
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter item"
            />
            <button onClick={addItem}>Add Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item * 5}</li>
                ))}
            </ul>
        </div>
    );
}

export default Demo;