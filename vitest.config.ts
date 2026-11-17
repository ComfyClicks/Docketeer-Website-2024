import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: 'jsdom',
    include: ['__tests__/**/*.test.tsx'],
    setupFiles: ['./__tests__/setup.ts'],
  },
}));
