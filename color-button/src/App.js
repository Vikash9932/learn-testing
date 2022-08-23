import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    if (color === 'blue') {
      setColor('red');
    } else {
      setColor('blue');
    }
  };
  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        Change to {color === 'blue' ? 'red' : 'blue'}
      </button>
    </div>
  );
}

export default App;
