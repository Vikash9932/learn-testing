import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (color === 'MidnightBlue') {
      setColor('MediumVioletRed');
    } else {
      setColor('MidnightBlue');
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: disabled ? 'gray' : color }}
        disabled={disabled}>
        Change to{' '}
        {color === 'MediumVioletRed'
          ? replaceCamelWithSpaces('MidnightBlue')
          : replaceCamelWithSpaces('MediumVioletRed')}
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
