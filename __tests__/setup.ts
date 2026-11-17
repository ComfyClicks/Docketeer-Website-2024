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

// JSDOM has no layout. This double makes content visible deterministically;
// real-browser checks remain responsible for intersection and rendering behavior.
class VisibleIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '0px';
  readonly scrollMargin = '0px';
  readonly thresholds = [0];

  constructor(private callback: IntersectionObserverCallback) {}

  observe(target: Element) {
    const bounds = target.getBoundingClientRect();
    this.callback([{
      target,
      isIntersecting: true,
      intersectionRatio: 1,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: null,
      time: performance.now(),
    }], this);
  }

  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

beforeEach(() => {
  vi.stubGlobal('matchMedia', vi.fn(createMediaQuery));
  vi.stubGlobal('IntersectionObserver', VisibleIntersectionObserver);
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
