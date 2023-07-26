import { useEffect, useState, useRef, useCallback } from "react";
import { State } from ".";
import { FieldErrors } from "react-hook-form";

export const useMartianAnimationState = (
  errors: null | FieldErrors<{ email: string; password: string }>,
  email: string,
  password: string,
  error: null | { message: string }
) => {
  const [state, setState] = useState<State>("ini");
  const timer = useRef<null | number>(null);

  const onChange = useCallback(() => {
    setState("typing");
    timer.current = setTimeout(() => {
      setState("sleep");
    }, 700);

    return () => {
      const timerId = timer.current;
      if (typeof timerId === "number") {
        clearTimeout(timerId);
      }
    };
  }, []);

  useEffect(() => {
    if (state === "ini") {
      return;
    }
    return onChange();
  }, [email, password]);

  useEffect(() => {
    if ((errors && Object.keys(errors).length) || error) {
      setState("error");
    } else {
      if (state === "error") {
        setState("sleep");
      }
    }
  }, [errors, error, state]);

  const setFocus = useCallback(() => {
    setState("focus");
  }, []);
  const setBlur = useCallback(() => {
    setState("sleep");
  }, []);

  return {
    setFocus,
    setBlur,
    state,
  };
};
