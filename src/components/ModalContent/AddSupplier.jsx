import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addSupplierSchema } from "../../services/validationSchemas";
import { addSupplier } from "../../redux/admin/operations";
import {
  AddBtn,
  BtnWrap,
  CancelBtn,
  ContentWrap,
  DatePick,
  Form,
} from "./ModalContent.styled";
import { Input, InputWrap } from "../AuthForms/AuthForms.styled";
import Select from "react-select";
import dayjs from "dayjs";

const options = [
  { value: "Active", label: "Active" },
  { value: "Deactive", label: "Deactive" },
];

const dateFormat = "MMMM D, YYYY";

const AddSupplier = ({ onRequestClose }) => {
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSupplierSchema) });

  const onSubmit = (data) => {
    dispatch(addSupplier(data));
    reset();
    onRequestClose();
  };
  return (
    <ContentWrap>
      <h2>Add a new supplier</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <Input
            {...register("name", { autoComplete: "off" })}
            placeholder="Suppliers Info"
            style={{ borderColor: errors.name && "#E85050" }}
          />
          <p>{errors.name?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("address", { autoComplete: "off" })}
            placeholder="Address"
            style={{ borderColor: errors.address && "#E85050" }}
          />
          <p>{errors.address?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("suppliers", { autoComplete: "off" })}
            placeholder="Company"
            style={{ borderColor: errors.suppliers && "#E85050" }}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrap>
        <InputWrap>
          <Controller
            control={control}
            name="date"
            rules={{ required: "Delivery is required field" }}
            render={({ field, fieldState }) => {
              return (
                <DatePick
                  status={fieldState.error ? "error" : undefined}
                  ref={field.ref}
                  name={field.name}
                  onBlur={field.onBlur}
                  placeholder="Delivery date"
                  value={field.value ? dayjs(field.value) : null}
                  format={dateFormat}
                  onChange={(date) => {
                    field.onChange(date ? date.valueOf() : null);
                  }}
                />
              );
            }}
          />
          <p>{errors.date?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("amount", { autoComplete: "off" })}
            placeholder="Amount"
            style={{ borderColor: errors.amount && "#E85050" }}
          />
          <p>{errors.amount?.message}</p>
        </InputWrap>
        <InputWrap>
          <Controller
            control={control}
            name="status"
            rules={{ required: "Status is required field" }}
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? "error" : undefined}
                name={name}
                ref={ref}
                options={options}
                placeholder="Status"
                value={options.find((option) => option.value === value)}
                onChange={(selectedOption) => onChange(selectedOption?.value)}
              />
            )}
          />
          <p>{errors.status?.message}</p>
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

export default AddSupplier;
