import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editProductSchema } from "../../services/validationSchemas";
import { updateProduct } from "../../redux/admin/operations";
import {
  AddBtn,
  BtnWrap,
  CancelBtn,
  ContentWrap,
  Form,
} from "./ModalContent.styled";
import { Input, InputWrap } from "../AuthForms/AuthForms.styled";
import Select from "react-select";

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

const EditProduct = ({ onRequestClose, product }) => {
  const dispatch = useDispatch();
  const id = product._id;

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editProductSchema) });

  const onSubmit = (data) => {
    dispatch(updateProduct({ id: id, value: data }));
    reset();
    onRequestClose();
  };

  return (
    <ContentWrap>
      <h2>Edit product</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <Input
            {...register("name", { autoComplete: "off" })}
            placeholder="Product Info"
            style={{ borderColor: errors.name && "#E85050" }}
            defaultValue={product.name}
          />
          <p>{errors.name?.message}</p>
        </InputWrap>
        <InputWrap>
          <Controller
            control={control}
            name="category"
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? "error" : undefined}
                name={name}
                ref={ref}
                options={options}
                placeholder={product.category}
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
            defaultValue={product.suppliers}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("stock", { autoComplete: "off" })}
            placeholder="Stock"
            style={{ borderColor: errors.stock && "#E85050" }}
            defaultValue={product.stock}
          />
          <p>{errors.stock?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("price", { autoComplete: "off" })}
            placeholder="Price"
            style={{ borderColor: errors.price && "#E85050" }}
            defaultValue={product.price}
          />
          <p>{errors.price?.message}</p>
        </InputWrap>
        <BtnWrap>
          <AddBtn type="submit">Save</AddBtn>
          <CancelBtn type="button" onClick={() => reset()}>
            Cancel
          </CancelBtn>
        </BtnWrap>
      </Form>
    </ContentWrap>
  );
};

export default EditProduct;
