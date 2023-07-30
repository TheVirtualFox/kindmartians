import { ReactNode } from "react";
import { Loading } from "../Loading";
import styles from "./Button.module.css";

type ButtonProps = {
  isLoading: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  ariaLabel: string;
};

export const Button = ({
  isLoading = false,
  type = "button",
  children,
  ariaLabel
}: ButtonProps) => {
  return (
    <button className={styles.btn} disabled={isLoading} type={type} aria-label={ariaLabel}>
      {isLoading ? <Loading /> : children}
    </button>
  );
};
