import { ReactNode } from "react";
import styles from "./App.module.css";

type AppProps = {
  children: ReactNode;
};

export const App = ({ children }: AppProps) => {
  return <main className={styles.App}>{children}</main>;
};
