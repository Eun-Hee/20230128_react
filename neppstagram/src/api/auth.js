import axios from "axios";

// src/api/auth.js
export const authAxios = axios.create({
  baseURL: "http://101.101.218.43/users",
});

//export const signup = (name, email, password) => {
export const signUp = async (form) => {
  try {
    const { data } = await authAxios.post("", form);
    return data;
  } catch (e) {
    console.log(e);
  }

  // const res = authAxios.post("", form);
  //{
  //  name,// name: name, 동일하면 생략 가능
  //  email: email,
  //  password: password,
  //});

  //return res;
};
