import { terser } from 'rollup-plugin-terser'

function config({ format, minify, input }) {
  const dir = `dist/${format}/`
  const minifierSuffix = minify ? '.min' : ''
  const ext = format === 'esm' ? 'mjs' : 'js'

  return {
    input: `./src/index.js`,
    output: {
      name: 'avatar-color',
      file: `${dir}/${input}${minifierSuffix}.${ext}`,
      format,
      sourcemap: true,
    },
    plugins: [
      minify
        ? terser({
            compress: true,
            mangle: { reserved: 'gGetAvatarColor' },
          })
        : [],
    ],
  }
}

require('rimraf').sync('dist')

export default [
  { input: 'avatar-color', format: 'esm', minify: false },
  { input: 'avatar-color', format: 'esm', minify: true },
  { input: 'avatar-color', format: 'umd', minify: false },
  { input: 'avatar-color', format: 'umd', minify: true },
  { input: 'avatar-color', format: 'cjs', minify: false },
  { input: 'avatar-color', format: 'cjs', minify: true },
].map(config)
