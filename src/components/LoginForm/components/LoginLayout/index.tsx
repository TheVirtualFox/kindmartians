import { ReactNode } from "react";
import styles from "./LoginLayout.module.css";

type LoginLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

export const LoginLayout = ({ left, right }: LoginLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.colLeft}>{left}</div>
      <div className={styles.colRight}>{right}</div>
    </div>
  );
};
