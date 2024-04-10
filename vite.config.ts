import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Change this to your desired output directory name
  },
  plugins: [sveltekit()],
});