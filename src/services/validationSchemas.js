import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("invalid email address")
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      "Wrong email. Please, try again..."
    )
    .trim()
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "min 6 symbols")
    .max(20, "max 20 symbols")
    .trim()
    .required("Password is required"),
});
