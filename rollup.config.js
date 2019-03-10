import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: 'src/index.js',
    output:{
      name: 'gGetAvatarColor',
      file: pkg.browser,
      format: 'umd'
    }
  },
]