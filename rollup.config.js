import babel from 'rollup-plugin-babel'

export default {
  input: 'src/core/main.js',
  output: {
    file: 'build/jquery.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
