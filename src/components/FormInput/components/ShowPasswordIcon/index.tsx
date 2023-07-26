import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import styles from "./ShowPasswordIcon.module.css";

type ShowPasswordIconProps = {
  isPassword: boolean;
  isHidden: boolean;
  onPasswordClick: () => void;
  className?: string;
};

export const ShowPasswordIcon = ({
  isPassword,
  isHidden,
  onPasswordClick,
  className = "",
}: ShowPasswordIconProps) => {
  if (!isPassword) {
    return null;
  }

  return (
    <button
      type="button"
      className={`${className} ${styles.icon}`}
      onClick={onPasswordClick}
    >
      {isHidden ? <EyeIcon /> : <EyeSlashIcon />}
    </button>
  );
};
