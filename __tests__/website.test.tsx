import { test, expect, vi } from 'vitest';
import { createMediaQuery } from './setup';
import { render, fireEvent, screen, within, act } from '@testing-library/react';
import App from '../src/App';
import Navbar from '../src/components/Navbar/Navbar';
import Mobile from '../src/components/Demo/DemoMobile/Mobile';
import Demo from '../src/components/Demo/Demo';

test('current content and native section destinations render', () => {
  render(<App />);
  expect(document.body.contains(screen.getByRole('heading', { name: 'Introducing Docketeer XX' }))).toBe(true);
  expect(document.body.contains(screen.getByRole('heading', { name: 'Meet The Docketeer Team!' }))).toBe(true);
  expect(screen.getAllByTestId('feature-card')).toHaveLength(9);
  const nav = screen.getByRole('navigation');
  for (const [label, id] of [['Home', 'home'], ['Features', 'features'], ['Demo', 'demo'], ['Get Started', 'getstarted'], ['Team', 'team']]) {
    expect(within(nav).getByRole('link', { name: label }).getAttribute('href')).toBe(`#${id}`);
    expect(document.body.contains(document.getElementById(id))).toBe(true);
  }
  expect(screen.getByRole('link', { name: 'Start Exploring' }).getAttribute('href')).toBe('#features');
});

test('menu exposes expanded state, closes with Escape and restores focus', () => {
  render(<Navbar />);
  const button = screen.getByRole('button', { name: 'Menu' });
  expect(button.getAttribute('aria-expanded')).toBe('false');
  fireEvent.click(button);
  expect(button.getAttribute('aria-expanded')).toBe('true');
  const home = screen.getByRole('link', { name: 'Home' });
  home.focus();
  fireEvent.keyDown(home, { key: 'Escape' });
  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(button);
});

test('choosing a section closes the menu', () => {
  render(<Navbar />);
  const button = screen.getByRole('button', { name: 'Menu' });
  fireEvent.click(button);
  fireEvent.click(screen.getByRole('link', { name: 'Demo' }));
  expect(button.getAttribute('aria-expanded')).toBe('false');
});

const names = ['Containers', 'Images', 'Data Visualization', 'Time-Series', 'Metrics', 'Cluster Metrics', 'Configuration', 'Others'];
test('mobile demo reaches every entry and wraps in both directions', () => {
  render(<Mobile />);
  for (const name of names) {
    expect(document.body.contains(screen.getByRole('img', { name: `${name} demo` }))).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: 'Next demo' }));
  }
  expect(document.body.contains(screen.getByRole('img', { name: 'Containers demo' }))).toBe(true);
  for (const name of [...names].reverse()) {
    fireEvent.click(screen.getByRole('button', { name: 'Previous demo' }));
    expect(document.body.contains(screen.getByRole('img', { name: `${name} demo` }))).toBe(true);
  }
});

test('desktop controls select the rendered demo and expose selected state', () => {
  render(<Demo />);
  for (const name of [...names.slice(0, 6), 'Configurations', 'Others']) {
    const button = screen.getByRole('button', { name });
    fireEvent.click(button);
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.body.contains(screen.getByRole('img', { name: `${name} demo` }))).toBe(true);
    expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(1);
  }
});

test('breakpoint changes restore focus after CSS hides the active control', () => {
  const media = createMediaQuery('(max-width: 1000px)');
  vi.stubGlobal('matchMedia', vi.fn(() => media));
  render(<Navbar />);
  const menu = screen.getByRole('button', { name: 'Menu' });
  menu.focus();
  fireEvent.click(menu);
  menu.blur(); // Chrome may drop focus before delivering the media-query change.
  media.matches = false;
  act(() => media.dispatchEvent(new Event('change')));
  const home = screen.getByRole('link', { name: 'Home' });
  expect(document.activeElement).toBe(home);
  home.blur();
  media.matches = true;
  act(() => media.dispatchEvent(new Event('change')));
  expect(document.activeElement).toBe(menu);
  expect(menu.getAttribute('aria-expanded')).toBe('false');
});
