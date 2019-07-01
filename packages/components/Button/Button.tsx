import React from 'react'
import styles from './Button.scss'

export interface ButtonProps {
  buttonStyle?: React.CSSProperties
  className?: string
  label: string
  onClick?(): void
}

export default React.memo(
  ({ label = 'asd', className, onClick }: ButtonProps) => (
    <button onClick={onClick} className={`${className} ${styles.mainColor1}`}>
      {label}!!!
    </button>
  )
)
