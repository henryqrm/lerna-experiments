import * as React from "react";
import styles from "./index.scss";

export interface DialogProps {
  title: string;
}

export default ({ title }: DialogProps) => (
  <div className={styles.dialog}>
    <h1>{title}</h1>
  </div>
);
