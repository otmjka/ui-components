// esbuild.config.js
const esbuild = require('esbuild');
const glob = require('glob');

// Using glob.sync instead of globSync
const entryPoints = glob.sync('./src/**/*.{ts,tsx}', {
  ignore: ['**/*.stories.tsx', '**/*.test.tsx'],
});

async function build() {
  try {
    await esbuild.build({
      entryPoints,
      outdir: 'dist',
      bundle: true,
      sourcemap: true,
      minify: true,
      format: 'esm',
      target: ['es2020'],
      external: ['react', 'react-dom', '@mui/material'],
      platform: 'neutral',
    });
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
