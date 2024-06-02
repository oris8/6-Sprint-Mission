import { axiosInstance } from "./dispatcher";

export const CreateUser = async (
  email: string,
  nickname: string,
  password: string,
  passwordConfirmation: string,
): Promise<any> => {
  const response = await axiosInstance.post("/auth/signUp", {
    body: {
      nickname,
      email,
      password,
      passwordConfirmation,
    },
  });
  console.log(response);
  return response;
};

export const LoginUser = async (
  email: string,
  password: string,
): Promise<any> => {
  const response = await axiosInstance.post("/auth/signIn", {
    body: {
      email,
      password,
    },
  });
  console.log(response);
  return response;
};
