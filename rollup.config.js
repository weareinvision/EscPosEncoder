import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default [
  {
    input: 'src/mobile.js',
    output: {
      file: 'dist/mobile.esm.js',
      format: 'esm',
    },
    plugins: [
      nodeResolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      json(),
    ],
  },
  {
    input: 'src/esc-pos-encoder.js',
    output: {
      file: 'dist/desktop.esm.js',
      format: 'esm',
    },
    plugins: [
      nodeResolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      json(),
    ],
  }
]
