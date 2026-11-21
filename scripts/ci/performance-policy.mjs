// Byte budget concerns decoded initial JavaScript resource bodies, not transfer or execution.
export const javascriptBudgetBytes = 350_000;

export function checkInitialResources(scriptResources, requested) {
  const decodedJavascriptBytes = scriptResources.reduce((total, resource) => total + resource.decodedBodySize, 0);
  const initialAnimations = requested.filter(url => /\.(?:gif|mp4)(?:[?#]|$)/i.test(url));
  const errors = [];
  if (!scriptResources.length || scriptResources.some(resource => !Number.isFinite(resource.decodedBodySize) || resource.decodedBodySize <= 0)) errors.push('Missing decoded JavaScript measurement');
  if (decodedJavascriptBytes > javascriptBudgetBytes) errors.push(`Initial decoded JavaScript ${decodedJavascriptBytes} B exceeds ${javascriptBudgetBytes} B`);
  if (initialAnimations.length) errors.push('GIF or MP4 requested before user interaction');
  return { decodedJavascriptBytes, initialAnimations, errors };
}
