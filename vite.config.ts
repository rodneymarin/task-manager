import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://dev.rodneymarin.com/taskmanager-build/",
  build: {
    outDir: '../build'
  }

});
