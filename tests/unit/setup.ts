import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

export function createMediaQuery(query: string, matches: boolean = true) {
  const events = new EventTarget();
  return {
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: events.addEventListener.bind(events),
    removeEventListener: events.removeEventListener.bind(events),
    dispatchEvent: events.dispatchEvent.bind(events),
  } satisfies MediaQueryList;
}

beforeEach(() => {
  vi.stubGlobal('matchMedia', vi.fn(createMediaQuery));
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
