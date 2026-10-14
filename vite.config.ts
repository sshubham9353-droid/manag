import path from 'node:path';
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 5173);

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-flat-static-files',
      apply: 'build',
      closeBundle() {
        for (const file of ['favicon.svg', 'robots.txt']) {
          copyFileSync(path.resolve(projectRoot, file), path.resolve(projectRoot, 'dist', file));
        }
      },
    },
  ],
  resolve: { dedupe: ['react', 'react-dom'] },
  server: {
    host: '0.0.0.0',
    port,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port,
    allowedHosts: true,
  },
  build: {
    outDir: path.resolve(projectRoot, 'dist'),
    emptyOutDir: true,
  },
});
