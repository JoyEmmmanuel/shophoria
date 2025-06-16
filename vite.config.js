/* eslint-env node */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isGithub = env.VITE_GITHUB_PAGES === 'true';

  return {
    plugins: [react()],
    base: isGithub ? '/shophoria/' : '/',
  };
});


