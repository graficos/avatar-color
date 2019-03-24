import { terser } from 'rollup-plugin-terser';

function config({ format, minify, input }) {
  const dir = `dist/${format}/`
  const minifierSuffix = minify ? '.min' : ''
  const ext = format === 'esm' ? 'mjs' : 'js'

  return {
    input: `./src/index.js`,
    output: {
      name: 'gGetAvatarColor',
      file: `${dir}/${input}${minifierSuffix}.${ext}`,
      format,
      sourcemap: true
    },
    plugins: [
      minify ?
        terser({
          sourcemap: true,
          compress: true,
          mangle: {reserved: 'gGetAvatarColor'}
        }) : []
    ]
  }
}

require('rimraf').sync('dist');

export default [
  { input: 'gGetAvatarColor', format: 'esm', minify: false },
  { input: 'gGetAvatarColor', format: 'esm', minify: true },
  { input: 'gGetAvatarColor', format: 'umd', minify: false },
  { input: 'gGetAvatarColor', format: 'umd', minify: true },
  { input: 'gGetAvatarColor', format: 'cjs', minify: false },
  { input: 'gGetAvatarColor', format: 'cjs', minify: true },
].map(config)
