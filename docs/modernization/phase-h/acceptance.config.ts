import { defineConfig } from '@playwright/test';
import base from '../../../playwright.config';
import { fileURLToPath } from 'node:url';
const engine = process.env.ACCEPTANCE_BROWSER || 'chromium';
if (!['chromium', 'firefox', 'webkit'].includes(engine)) throw new Error('Unsupported acceptance browser');
export default defineConfig({
  ...base,
  webServer: { ...base.webServer, cwd: fileURLToPath(new URL('../../../', import.meta.url)) },
  testDir: '../../../e2e',
  outputDir: `../../../reports/acceptance-followup/${engine}`,
  reporter: [['list'], ['json', { outputFile: `../../../reports/acceptance-followup/${engine}.json` }]],
  projects: base.projects!.map(project => ({ ...project, use: { ...project.use,
    browserName: engine as 'chromium' | 'firefox' | 'webkit',
    ...(process.env.ACCEPTANCE_EXECUTABLE ? { launchOptions: { executablePath: process.env.ACCEPTANCE_EXECUTABLE } } : {}),
    // Firefox does not support Playwright mobile emulation; retain narrow viewport/touch.
    ...(engine === 'firefox' ? { isMobile: false } : {}),
  } })),
});
