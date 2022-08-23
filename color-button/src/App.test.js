import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click the button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  // check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
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
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('change the button color to gray when disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  //disable button -> button is gray -> enable button -> button is red
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button to change color -> disable button -> button is gray
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // enable button -> button is blue
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});
