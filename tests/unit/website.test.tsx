import { test, expect, vi } from 'vitest';
import { createMediaQuery } from './setup';
import { render, fireEvent, screen, within, act } from '@testing-library/react';
import App from '../../src/App';
import Navbar from '../../src/components/Navbar/Navbar';
import Demo from '../../src/components/Demo/Demo';

test('switching mobile demos recreates the player with the selected recording', () => {
  vi.stubGlobal('innerWidth', 320);
  render(<Demo />);
  const video = screen.getByRole('figure', { name: 'Containers demo' }).querySelector('video');
  expect(video).not.toBeNull();
  fireEvent.click(screen.getByRole('button', { name: 'Next demo' }));
  const imagesVideo = screen.getByRole('figure', { name: 'Images demo' }).querySelector('video');
  expect(imagesVideo?.poster).not.toBe(video?.poster);
  fireEvent.click(screen.getByRole('button', { name: 'Previous demo' }));
  const resetVideo = screen.getByRole('figure', { name: 'Containers demo' }).querySelector('video');
  expect(resetVideo).not.toBe(video);
  expect(resetVideo?.poster).toBe(video?.poster);
  expect(resetVideo?.preload).toBe('none');
});

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
  vi.stubGlobal('innerWidth', 320);
  render(<Demo />);
  for (const name of names) {
    expect(document.body.contains(screen.getByRole('figure', { name: `${name} demo` }))).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: 'Next demo' }));
  }
  expect(document.body.contains(screen.getByRole('figure', { name: 'Containers demo' }))).toBe(true);
  for (const name of [...names].reverse()) {
    fireEvent.click(screen.getByRole('button', { name: 'Previous demo' }));
    expect(document.body.contains(screen.getByRole('figure', { name: `${name} demo` }))).toBe(true);
  }
});

test('desktop controls select the rendered demo and expose selected state', () => {
  render(<Demo />);
  for (const name of [...names.slice(0, 6), 'Configurations', 'Others']) {
    const button = screen.getByRole('button', { name });
    fireEvent.click(button);
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.body.contains(screen.getByRole('figure', { name: `${name} demo` }))).toBe(true);
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

test('page exposes landmarks, one primary heading, and named images and links', () => {
  render(<App />);
  expect(screen.getAllByRole('main')).toHaveLength(1);
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  const skip = screen.getByRole('link', { name: 'Skip to content' });
  const destination = document.querySelector(skip.getAttribute('href')!);
  expect(destination?.getAttribute('tabindex')).toBe('-1');
  for (const image of document.querySelectorAll('img')) {
    expect(image.hasAttribute('alt'), image.src).toBe(true);
  }
  for (const link of screen.getAllByRole('link')) {
    const name = link.getAttribute('aria-label') || link.textContent?.trim() ||
      [...link.querySelectorAll('img')].map(image => image.alt).join('').trim();
    expect(Boolean(name), link.getAttribute('href') || 'unnamed link').toBe(true);
  }
});


test('selected demo survives crossing the mobile breakpoint', () => {
  vi.stubGlobal('innerWidth', 1024);
  render(<Demo />);
  fireEvent.click(screen.getByRole('button', { name: 'Images' }));
  vi.stubGlobal('innerWidth', 390);
  fireEvent(window, new Event('resize'));
  expect(document.body.contains(screen.getByRole('figure', { name: 'Images demo' }))).toBe(true);
  fireEvent.click(screen.getByRole('button', { name: 'Next demo' }));
  vi.stubGlobal('innerWidth', 1024);
  fireEvent(window, new Event('resize'));
  expect(screen.getByRole('button', { name: 'Data Visualization' }).getAttribute('aria-pressed')).toBe('true');
});

test('demo playback is user-controlled and media does not preload video', () => {
  render(<Demo />);
  const figure = screen.getByRole('figure', { name: 'Containers demo' });
  const video = figure.querySelector('video');
  expect(video).not.toBeNull();
  expect(figure.querySelector('button')?.getAttribute('aria-label')).toBe('Play Containers demonstration');
  expect(video?.autoplay).toBe(false);
  expect(video?.preload).toBe('none');
  expect(video?.getAttribute('poster')).toBeTruthy();
  expect(Number(video?.getAttribute('width'))).toBeGreaterThan(0);
  expect(Number(video?.getAttribute('height'))).toBeGreaterThan(0);
  const containerSources = figure.querySelectorAll('video source');
  expect(Array.from(containerSources, source => source.getAttribute('type'))).toEqual(['video/mp4; codecs="av01.0.04M.08"', 'video/mp4']);
  fireEvent.click(screen.getByRole('button', { name: 'Data Visualization' }));
  const sources = screen.getByRole('figure', { name: 'Data Visualization demo' }).querySelectorAll('video source');
  expect(Array.from(sources, source => source.getAttribute('type'))).toEqual(['video/mp4']);
  expect(sources[0].getAttribute('src')).toContain('data-visualization-540p-h264.mp4');
});
