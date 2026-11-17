// JSDOM has no layout; observe targets deterministically without a browser polyfill.
class TestIntersectionObserver {
  constructor(callback) { this.callback = callback; }
  observe(target) { this.callback([{ target, isIntersecting: true, intersectionRatio: 1 }], this); }
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = TestIntersectionObserver;
