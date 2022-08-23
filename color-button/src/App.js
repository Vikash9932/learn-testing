import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (color === 'blue') {
      setColor('red');
    } else {
      setColor('blue');
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color }}
        disabled={disabled}>
        Change to {color === 'blue' ? 'red' : 'blue'}
      </button>

      <input
        id='disable-button-checkbox'
        type='checkbox'
        defaultChecked={disabled}
        aria-checked={disabled} //For Screen readers
        onChange={() => setDisabled(!disabled)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
