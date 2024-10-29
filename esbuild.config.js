// esbuild.config.js
import esbuild from 'esbuild';
// const esbuild = require('esbuild');
// const glob = require('glob');
import * as glob from 'glob';

// Using glob.sync instead of globSync
const entryPoints = glob.sync('./src/**/*.{ts,tsx}', {
  ignore: ['**/*.stories.tsx', '**/*.test.tsx'],
});

async function build() {
  try {
    // ESM Build
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      outfile: 'dist/index.js',
      bundle: true,
      sourcemap: true,
      minify: true,
      format: 'esm',
      target: ['es2020'],
      external: ['react', 'react-dom', '@mui/material'],
      platform: 'neutral',
      packages: 'external',
    });

    // CJS Build (for CommonJS support)
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      outfile: 'dist/index.cjs',
      bundle: true,
      sourcemap: true,
      minify: true,
      format: 'cjs',
      target: ['es2020'],
      external: ['react', 'react-dom', '@mui/material'],
      platform: 'neutral',
      packages: 'external',
    });
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
