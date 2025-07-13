
import './App.css';
import { useEffect, useState } from 'react';
import DarkMode from './Components/DarkMode';
import InputVf from './Components/InputVF';
import Counter from './Components/Counter';

function App() {

  const [mode, setmode] = useState('light');

  const toggleTheme = () => {
    setmode(mode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#323232' : '#ffffff';
  }, [mode]);
  return (

    <div style={{ textAlign: 'center', marginTop: '20px' }}>

      <InputVf theme={mode} />
      <hr />
    <Counter  theme={mode}/>
    <hr/>

      <button
        onClick={toggleTheme}
        className={mode === 'light' ? 'button2' : 'button3'}
      >
        Switch to {mode === 'light' ? 'dark' : 'light'} Mode
      </button>



      <DarkMode theme={mode} />



    </div>

  )
}

export default App;