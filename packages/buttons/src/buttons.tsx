import * as React from "react"
// import { string } from 'prop-types'
import styles from "./buttons.scss";

export interface ButtonProps {
  label: string;
  className?: string;
  buttonStyle?: React.CSSProperties;
  onClick?: () => void;
}

function Button({ label = 'asd', className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${className} ${styles.mainColor1}`}>
      {label}!!!
    </button>
  );
}

// Button.propTypes = {
//   label: string.isRequired
// };

export default Button;
