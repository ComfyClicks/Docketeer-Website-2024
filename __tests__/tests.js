import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import App from '../src/App';
import Navbar from '../src/components/Navbar/Navbar';
import Mobile from '../src/components/Demo/DemoMobile/Mobile';
import Demo from '../src/components/Demo/Demo';

beforeEach(() => {
  window.matchMedia = jest.fn(() => ({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() }));
});

test('current content and native section destinations render', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Introducing Docketeer XX' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Meet The Docketeer Team!' })).toBeInTheDocument();
  expect(screen.getAllByTestId('feature-card')).toHaveLength(9);
  const nav = screen.getByRole('navigation');
  for (const [label, id] of [['Home', 'home'], ['Features', 'features'], ['Demo', 'demo'], ['Get Started', 'getstarted'], ['Team', 'team']]) {
    expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`);
    expect(document.getElementById(id)).toBeInTheDocument();
  }
  expect(screen.getByRole('link', { name: 'Start Exploring' })).toHaveAttribute('href', '#features');
});

test('menu exposes expanded state, closes with Escape and restores focus', () => {
  render(<Navbar />);
  const button = screen.getByRole('button', { name: 'Menu' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  const home = screen.getByRole('link', { name: 'Home' });
  home.focus();
  fireEvent.keyDown(home, { key: 'Escape' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(button).toHaveFocus();
});

test('choosing a section closes the menu', () => {
  render(<Navbar />);
  const button = screen.getByRole('button', { name: 'Menu' });
  fireEvent.click(button);
  fireEvent.click(screen.getByRole('link', { name: 'Demo' }));
  expect(button).toHaveAttribute('aria-expanded', 'false');
});

const names = ['Containers', 'Images', 'Data Visualization', 'Time-Series', 'Metrics', 'Cluster Metrics', 'Configuration', 'Others'];
test('mobile demo reaches every entry and wraps in both directions', () => {
  render(<Mobile />);
  for (const name of names) {
    expect(screen.getByRole('img', { name: `${name} demo` })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Next demo' }));
  }
  expect(screen.getByRole('img', { name: 'Containers demo' })).toBeInTheDocument();
  for (const name of [...names].reverse()) {
    fireEvent.click(screen.getByRole('button', { name: 'Previous demo' }));
    expect(screen.getByRole('img', { name: `${name} demo` })).toBeInTheDocument();
  }
});

test('desktop controls select the rendered demo and expose selected state', () => {
  render(<Demo />);
  for (const name of [...names.slice(0, 6), 'Configurations', 'Others']) {
    const button = screen.getByRole('button', { name });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('img', { name: `${name} demo` })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(1);
  }
});
