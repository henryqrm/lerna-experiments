import React from 'react'
import styles from './Button.scss'

export interface ButtonProps {
  /**
   * Click event handler
   */
  onClick?(): void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => (
  <button className={styles.mainColor1} type="button" onClick={onClick}>
    {children}
  </button>
)

export default Button
