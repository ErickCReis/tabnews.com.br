import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

config();

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    fileParallelism: false,
    isolate: false,
    testTimeout: 10000,
    hookTimeout: 30000,
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: [],
  },
});
