// vite-plugin-solid enables SolidJS JSX transform and HMR support
import solid from 'vite-plugin-solid';
// Import from vitest/config to get Vitest-aware type hints alongside Vite config
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solid()],
  test: {
    // Run tests in a Node.js environment (no browser DOM required for unit tests)
    environment: 'node',
  },
});
