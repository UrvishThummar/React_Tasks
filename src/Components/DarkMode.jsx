import { useState } from "react";
import './InputVf.css';


function DarkMode({ theme }) {
    const style = {
        light: {
            backgroundColor: '#ffff',
            color: 'black',
            padding: '20px',
            borderRadius: '10px',
        },
        dark: {
            backgroundColor: '#3232', 
            color:   '#ffff',
            padding: '20px',
            borderRadius: '10px',
        }

    }

    return (
        
            <div style={{ minHeight: '100vh', ...style[theme] }}>
                <h2>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</h2>
                <p>This is a simple example using props to handle themes.</p>

            </div>
        

    )
}

export default DarkMode;