import { useState } from "react";

type ErrType = { message: string };
type ResType = { userId: number };

const fetch = (): Promise<ErrType | ResType> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? res({
            userId: 777,
          })
        : rej({
            message: "Wrong password",
          });
    }, 1000);
  });
};

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<null | ResType>(null);
  const [error, setError] = useState<null | ErrType>(null);

  const postLogin = async () => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch();
      setData(res as ResType);
    } catch (err) {
      setError(err as ErrType);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    postLogin,
  };
};
