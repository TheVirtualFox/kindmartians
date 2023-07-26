import {
  UseFormRegister,
  Path,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import styles from "./FormInput.module.css";

import { useState } from "react";
import { ShowPasswordIcon } from "./components/ShowPasswordIcon";

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: "password";
  label: string;
};

export const FormInput = <T extends FieldValues>({
  name,
  register,
  errors,
  disabled = false,
  onFocus,
  onBlur,
  placeholder,
  type,
  label,
}: FormInputProps<T>) => {
  const error = errors?.[name]?.message;
  const isPassword = type === "password";
  const [isHidden, setIsHidden] = useState(true);

  const onPasswordClick = () => {
    setIsHidden((isHidden) => {
      return !isHidden;
    });
  };

  return (
    <div className={`${styles.formInputContainer} ${error ? "error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.formInput}>
        <input
          {...register(name)}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          type={isHidden ? type : "text"}
          id={name}
          autoComplete="off"
        />
        <ShowPasswordIcon
          className={styles.icon}
          onPasswordClick={onPasswordClick}
          isHidden={isHidden}
          isPassword={isPassword}
        />
      </div>
      <div className={styles.inputErr}>{error && error?.toString()}</div>
    </div>
  );
};
