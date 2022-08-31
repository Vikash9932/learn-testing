import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('initial conditions', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const submitButton = screen.getByRole('button', { name: 'Confirm order' });
  expect(submitButton).toBeDisabled();
});

test('First click of checkbox should enable the button , second click should disable it', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const submitButton = screen.getByRole('button', { name: 'Confirm order' });

  //1st click
  await user.click(checkbox);
  // fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  //2nd Click
  await user.click(checkbox);
  // fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  const nullPopoverAgain = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopoverAgain).not.toBeInTheDocument();
});
