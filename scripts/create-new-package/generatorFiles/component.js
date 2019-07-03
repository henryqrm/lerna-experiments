module.exports = ({ Name }) => ({
  componentFile: `import React from 'react'
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
})
