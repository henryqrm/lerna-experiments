import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { readdirSync } from 'fs'

const cwd = process.cwd()
const pkg = require(path.join(cwd, 'package.json'))
const dirFiles = readdirSync(cwd)
const extensions = ['tsx', 'ts', 'jsx', 'js']

const fileName = cwd.split('/').pop()

const extension = _file => extensions.find(_extension => _file.split('.')[1] === _extension)
const inputFile = dirFiles.find(_file => _file === `${fileName}.${extension(_file)}`)
const isTs = Boolean((inputFile || '').match('ts'))
const input = path.join(cwd, inputFile || 'index.js')

export default {
  plugins: [
    postcss({
      modules: true,
      extract: true,
      namedExports: true,
      generateScopedName: '[hash:base64:5]',
      plugins: [autoprefixer()],
      extensions: ['.scss', '.css']
    }),
    isTs && typescript({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          outDir: './dist'
        },
        include: [cwd]
      }
    })
  ],
  external: Object.keys(pkg.dependencies || {}),
  input,
  output: {
    globals: {
      react: 'React'
    },
    format: inputFile ? 'umd' : 'cjs',
    name: pkg.name,
    file: pkg.main
  }
}
