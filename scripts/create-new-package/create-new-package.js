const { writeFileSync, mkdirSync } = require('fs')
const type = process.argv[2]
const name = process.argv[3]
const Name = name.charAt(0).toUpperCase() + name.slice(1)
const description = process.argv[4]
const isLibrary = type === 'libraries'
const directory = `packages/${type}/${isLibrary ? name : Name}`
const file = isLibrary ? `${name}.ts` : `${Name}.tsx`


const containers = `import React from 'react'
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

const libraries = `const ${name} = () => {

}

export default ${name}
`

const types = {
  components,
  libraries,
  containers
}

mkdirSync(directory, { recursive: true })
writeFileSync(`${directory}/package.json`, package, { encoding: 'utf8' })
writeFileSync(`${directory}/${file}`, types[type], { encoding: 'utf8' })

!isLibrary &&
  writeFileSync(`${directory}/${Name}.scss`, sass, { encoding: 'utf8' })
