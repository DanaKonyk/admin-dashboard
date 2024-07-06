import * as yup from "yup";

export const authSchema = yup.object({
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

export const addProductSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  category: yup
    .string()
    .oneOf(
      [
        "Medicine",
        "Head",
        "Hand",
        "Dental Care",
        "Skin Care",
        "Eye Care",
        "Vitamins & Supplements",
        "Orthopedic Products",
        "Baby Care",
      ],
      "Invalid Type"
    )
    .required("Category is required"),
  suppliers: yup.string().trim().required("Suppliers is required"),
  stock: yup.number().required("Stock is required"),
  price: yup.number().required("Price is required"),
});
