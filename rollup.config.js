import { terser } from "rollup-plugin-terser";

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    plugins: [
      terser(),
    ],
    output: [
      { file: pkg.main, format: 'cjs', /* sourcemap: 'inline' */ },
      { file: pkg.module, format: 'es', /* sourcemap: 'inline' */ }
    ],
  },
  {
    input: 'src/index.js',
    plugins: [
      terser({mangle: {reserved: 'gGetAvatarColor'}}),
    ],
    output: {
      name: 'gGetAvatarColor',
      file: pkg.browser,
      format: 'umd',
      /* sourcemap: 'inline', */
    },
  },
]
