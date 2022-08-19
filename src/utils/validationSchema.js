import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  password: Yup.string()
    .min(4, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
