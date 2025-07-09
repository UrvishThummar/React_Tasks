import { useState } from "react";
import './InputVf.css';


function InputVf({ theme }) {
   
    const [input, setinput] = useState('')

    const [result, setresult] = useState('')

    function handelChange(e) {
        setinput(e.target.value)
    }

    function handelInput() {
        setresult(input * 5);

    }

    return (
         <div className={`container ${theme === 'dark' ? 'dark' : 'light'}`}>
            <input className="inputField" type="text" name="" id="" onChange={handelChange} placeholder="Enter number" />
            <button onClick={handelInput}  className={theme === 'light' ? 'button2' : 'button3'}>Click</button>
           <h3 style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                Result: {result}
            </h3>

        </div>
    )
}
export default InputVf;