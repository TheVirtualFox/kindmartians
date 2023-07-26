import { ReactNode } from "react";
import { Loading } from "../Loading";
import styles from "./Button.module.css";

type ButtonProps = {
  isLoading: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
};

export const Button = ({
  isLoading = false,
  type = "button",
  children,
}: ButtonProps) => {
  return (
    <button className={styles.btn} disabled={isLoading} type={type}>
      {isLoading ? <Loading /> : children}
    </button>
  );
};
