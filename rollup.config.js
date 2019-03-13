import { terser } from "rollup-plugin-terser";
import sourcemaps from 'rollup-plugin-sourcemaps';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    plugins: [
      sourcemaps(),
      terser(),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    sourceMap: true,
  },
  {
    input: 'src/index.js',
    plugins: [
      sourcemaps(),
      terser({mangle: {reserved: 'gGetAvatarColor'}}),
    ],
    output: {
      name: 'gGetAvatarColor',
      file: pkg.browser,
      format: 'umd'
    },
    sourceMap: true,
  },
]
