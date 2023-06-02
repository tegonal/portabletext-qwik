import {defineConfig} from 'vite';
import {qwikVite} from '@builder.io/qwik/optimizer';
import dts from "vite-plugin-dts";

export default defineConfig(() => {
  return {
    build: {
      target: 'es2020',
      emptyOutDir: true,
      outDir: './dist',
      lib: {
        entry: './src/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        external: [
          /^node:.*/,
          /^@portabletext\/.*/,
          /^@builder\.io\/.*/,
        ],
      }
    },
    plugins: [
      qwikVite(),
      dts({
        rollupTypes: true,
       }),
      ],
  };
});
