import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./LoginForm.module.css";
import { LoginLayout } from "./components/LoginLayout";
import { Martian } from "../Martian";
import { useMartianAnimationState } from "../Martian/useMartianAnimationState";
import { FormInput } from "../FormInput";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Links } from "./components/Links";
import { useLogin } from "../../server/useLogin";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading, postLogin, data, error } = useLogin();

  const email = watch("email", "");
  const password = watch("password", "");

  const { setBlur, setFocus, state } = useMartianAnimationState(
    errors,
    email,
    password,
    error
  );

  return (
    <LoginLayout
      left={
        <div className={styles.martianContainer}>
          <Martian
            state={state}
            message={data && "Sign"}
            error={error?.message ?? null}
          />
        </div>
      }
      right={
        <div className={styles.loginContainer}>
          <Logo />
          <form onSubmit={handleSubmit(postLogin)}>
            <FormInput
              label="Email"
              name="email"
              register={register}
              errors={errors}
              onFocus={setFocus}
              onBlur={setBlur}
              placeholder="Email"
            />
            <FormInput
              label="Password"
              name="password"
              register={register}
              errors={errors}
              onFocus={setFocus}
              onBlur={setBlur}
              placeholder="Password"
              type="password"
            />
            <Button isLoading={isLoading} type="submit">
              Sign In
            </Button>
          </form>
          <Links />
        </div>
      }
    />
  );
};
