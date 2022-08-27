import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click the button
  fireEvent.click(colorButton);

  //expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  //expect the button text to be 'Change to Midnight Violet Red'
  expect(colorButton.toHaveTextContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  // check that button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button is disabled when checkbox is checked', () => {
  render(<App />);

  // checkbox is checked
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  // button is disabled
  const colorButton = screen.getByRole('button');
  expect(colorButton).toBeDisabled();
});

test('button is enabled when checkbox is checked and then unchecked', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');

  //check the box
  fireEvent.click(checkbox);
  // uncheck the box
  fireEvent.click(checkbox);
  // button should be enabled
  const colorButton = screen.getByRole('button');
  expect(colorButton).toBeEnabled();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('change the button color to gray when disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  //disable button -> button is gray -> enable button -> button is Midnight Violet Red
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button to change color -> disable button -> button is gray
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // enable button -> button is Midnight Blue
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('spaces before camel case capital letters', () => {
  // E.g. Red
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  // E.g. MidnightBlue
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  // E.g. MediumVioletRed
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
