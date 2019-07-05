import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { existsSync } from 'fs'

const cwd = process.cwd()
const pkg = require(path.join(cwd, 'package.json'))

const fileName = cwd.split('/').pop()

const getInputTs = () => {
  if (existsSync(path.join(cwd, `${fileName}.tsx`))) {
    return path.join(cwd, `${fileName}.tsx`)
  }

  if (existsSync(path.join(cwd, `${fileName}.ts`))) {
    return path.join(cwd, `${fileName}.ts`)
  }

  if (existsSync(path.join(cwd, `index.ts`))) {
    return path.join(cwd, `index.ts`)
  }

  return
}

const getInputJs = () => {
  if (existsSync(path.join(cwd, `${fileName}.jsx`))) {
    return path.join(cwd, `${fileName}.jsx`)
  }

  if (existsSync(path.join(cwd, `${fileName}.js`))) {
    return path.join(cwd, `${fileName}.js`)
  }

  if (existsSync(path.join(cwd, `index.js`))) {
    return path.join(cwd, `index.js`)
  }

  return
}

const input = getInputTs() || getInputJs()

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
    getInputTs() &&
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
  input,
  output: {
    globals: {
      react: 'React'
    },
    format: 'umd',
    name: pkg.name,
    file: pkg.main
  }
}
