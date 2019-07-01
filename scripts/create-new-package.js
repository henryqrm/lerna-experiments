const { writeFileSync, mkdirSync } = require('fs')
const type = process.argv[2]
const name = process.argv[3]
const Name = name.charAt(0).toUpperCase() + name.slice(1)
const description = process.argv[4]
const isLibrary = type === 'library'
const directory = `packages/${type}/${isLibrary ? name : Name}`
const file = isLibrary ? `${name}.ts` : `${Name}.tsx`
const dependencies = type !== 'library' ? {
    react: "^16.7.0"
} : {}

const package = {
    name: `@henryqrm/${name}`,
    version: "0.0.0",
    description: description || `${name} ${type}`,
    homepage: "https://github.com/henryqrm/lerna-experiments",
    license: "MIT",
    main: `dist/${name}.js`,
    module: `dist/${name}.js`,
    typings: `dist/${name}.d.ts`,
    files: [
        "dist"
    ],
    publishConfig: {
        access: "public"
    },
    keywords: [
        "javascript"
    ],
    bugs: {
        url: "https://github.com/henryqrm/lerna-experiments/issues"
    },
    author: {
        name: "Henrique Rodrigues Moreira",
        email: "henryqrm@gmail.com",
        url: "http://github.com/henryqrm"
    },
    repository: {
        type: "git",
        url: "https://github.com/henryqrm/lerna-experiments",
        directory
    },
    dependencies,
}

const component = `import React from 'react'
import styles from './${Name}.scss'

export interface ${Name}Props {
  
}

export default React.memo(({  }: ${Name}Props) => {
  
  return (
    <>
      
    </>
  )
})
`

const container = `import React from 'react'
import styles from './${Name}.scss'

export interface ${Name}Props {
  
}

const ${Name} = ({  }: ${Name}Props) => {
  

  return (
    <>
      
    </>
  )
}

export default React.memo(${Name})
`

const sass = `:scope {
  
}
`

const library = `const ${name} = () => {
  
}

export default ${name}
`

const types = {
    component,
    library,
    container,
}

mkdirSync(directory, { recursive: true })
writeFileSync(`${directory}/package.json`, JSON.stringify(package), { encoding: 'utf8' })
writeFileSync(`${directory}/${file}`, types[type], { encoding: 'utf8' })
!isLibrary && writeFileSync(`${directory}/${Name}.scss`, sass, { encoding: 'utf8' })
