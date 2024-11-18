// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     // 👋 add the line below to add jsdom to vite
//     environment: 'jsdom',
//     // hey! 👋 over here
//     globals: true,
//     setupFiles: './viteTestSetup.js', // assuming the test folder is in the root of our project
//   },
// });

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './viteTestSetup.js', // assuming the test folder is in the root of our project
  },
})
