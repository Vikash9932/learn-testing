import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('initial conditions', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const submitButton = screen.getByRole('button', { name: 'Confirm order' });
  expect(submitButton).toBeDisabled();
});

test('First click of checkbox should enable the button , second click should disable it', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const submitButton = screen.getByRole('button', { name: 'Confirm order' });

  //1st click
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  //2nd Click
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});
