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
  stock: yup
    .number()
    .typeError("Amount must be a number")
    .required("Stock is required"),
  price: yup
    .number()
    .typeError("Amount must be a number")
    .required("Price is required"),
});

export const addSupplierSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  address: yup.string().trim().required("Address is required"),
  suppliers: yup.string().trim().required("Company is required"),
  date: yup.string().trim().required("Date is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be a positive number")
    .required("Amount is required"),
  status: yup
    .string()
    .oneOf(["Active", "Deactive"], "Invalid Type")
    .required("Status is required"),
});

export const editProductSchema = yup.object({
  name: yup.string().trim(),
  category: yup.string(),
  suppliers: yup.string().trim(),
  stock: yup.number(),
  price: yup.number(),
});

export const editSuplierSchema = yup.object({
  name: yup.string().trim(),
  address: yup.string().trim(),
  suppliers: yup.string().trim(),
  date: yup.date(),
  amount: yup.number(),
  status: yup.string(),
});
