import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from './Button'

storiesOf('2. Components|Button', module).add(
  'simple button',
  () => <Button onClick={action('button clicked')}>OK</Button>,
  {
    info: { inline: true },
  },
)
