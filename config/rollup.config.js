import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { existsSync } from 'fs'

const cwd = process.cwd()
const pkg = require(path.join(cwd, 'package.json'))

const fileName = cwd.split('/').pop()

const getInput = () =>
  existsSync(path.join(cwd, `${fileName}.tsx`))
    ? path.join(cwd, `${fileName}.tsx`)
    : path.join(cwd, `${fileName}.ts`)

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
    typescript({
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
  input: getInput(),
  output: {
    globals: {
      react: 'React'
    },
    format: 'umd',
    name: pkg.name,
    file: pkg.main
  }
}
