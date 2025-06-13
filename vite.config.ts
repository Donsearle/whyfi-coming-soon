import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      fs: 'fs',
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['lucide-react']
  }
});