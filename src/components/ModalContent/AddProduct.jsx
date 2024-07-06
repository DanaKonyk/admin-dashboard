import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProductSchema } from "../../services/validationSchemas";
import { addProduct } from "../../redux/admin/operations";
import Select from "react-select";
import {
  AddBtn,
  BtnWrap,
  CancelBtn,
  ContentWrap,
  Form,
} from "./ModalContent.styled";
import { Input, InputWrap } from "../AuthForms/AuthForms.styled";

const options = [
  {
    value: "Medicine",
    label: "Medicine",
  },
  {
    value: "Head",
    label: "Head",
  },
  {
    value: "Hand",
    label: "Hand",
  },
  {
    value: "Dental Care",
    label: "Dental Care",
  },
  {
    value: "Skin Care",
    label: "Skin Care",
  },
  {
    value: "Eye Care",
    label: "Eye Care",
  },
  {
    value: "Vitamins & Supplements",
    label: "Vitamins & Supplements",
  },
  {
    value: "Orthopedic Products",
    label: "Orthopedic Products",
  },
  {
    value: "Baby Care",
    label: "Baby Care",
  },
];

const AddProduct = ({ onRequestClose }) => {
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addProductSchema) });

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
    onRequestClose();
  };
  return (
    <ContentWrap>
      <h2>Add a new product</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <Input
            {...register("name", { autoComplete: "off" })}
            placeholder="Product Info"
            style={{ borderColor: errors.name && "#E85050" }}
          />
          <p>{errors.name?.message}</p>
        </InputWrap>
        <InputWrap>
          <Controller
            control={control}
            name="category"
            rules={{ required: "Status is required field" }}
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? "error" : undefined}
                name={name}
                ref={ref}
                options={options}
                placeholder="Category"
                value={options.find((option) => option.value === value)}
                onChange={(selectedOption) => onChange(selectedOption?.value)}
              />
            )}
          />
          <p>{errors.category?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("suppliers", { autoComplete: "off" })}
            placeholder="Suppliers"
            style={{ borderColor: errors.suppliers && "#E85050" }}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("stock", { autoComplete: "off" })}
            placeholder="Stock"
            style={{ borderColor: errors.stock && "#E85050" }}
          />
          <p>{errors.stock?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("price", { autoComplete: "off" })}
            placeholder="Price"
            style={{ borderColor: errors.price && "#E85050" }}
          />
          <p>{errors.price?.message}</p>
        </InputWrap>
        <BtnWrap>
          <AddBtn type="submit">Add</AddBtn>
          <CancelBtn type="button" onClick={() => reset()}>
            Cancel
          </CancelBtn>
        </BtnWrap>
      </Form>
    </ContentWrap>
  );
};

export default AddProduct;
