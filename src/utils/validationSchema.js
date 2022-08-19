import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});

export const loginSchema = Yup.object().shape({
  username: Yup.string().trim().required("Required"),
  password: Yup.string().trim().required("Required"),
});
