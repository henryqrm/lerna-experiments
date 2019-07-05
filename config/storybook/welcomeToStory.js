import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Welcome', module)
  .addParameters({
    options: {
      showPanel: false
    },
    info: {
      header: false,
      disabled: true,
      source: false
    }
  })
  .add('Welcome', () => <h1>asdasd</h1>)
