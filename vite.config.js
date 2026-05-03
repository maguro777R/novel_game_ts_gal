import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/novel_game_ts_gal/',
  plugins: [react()],
});
