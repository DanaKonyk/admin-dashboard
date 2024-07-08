import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editSuplierSchema } from "../../services/validationSchemas";
import { updateSupplier } from "../../redux/admin/operations";
import {
  AddBtn,
  BtnWrap,
  CancelBtn,
  ContentWrap,
  DatePick,
  Form,
} from "./ModalContent.styled";
import { Input, InputWrap } from "../AuthForms/AuthForms.styled";
import { getDate } from "../../services/getDate";
import Select from "react-select";

const options = [
  { value: "Active", label: "Active" },
  { value: "Deactive", label: "Deactive" },
];

const dateFormat = "MMMM D, YYYY";

const EditSupplier = ({ onRequestClose, supplier }) => {
  const dispatch = useDispatch();
  const id = supplier._id;

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editSuplierSchema) });

  const onSubmit = (data) => {
    dispatch(updateSupplier({ id: id, value: data }));
    reset();
    onRequestClose();
  };
  return (
    <ContentWrap>
      <h2>Edit supplier</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <Input
            {...register("name", { autoComplete: "off" })}
            placeholder="Suppliers Info"
            style={{ borderColor: errors.name && "#E85050" }}
            defaultValue={supplier.name}
          />
          <p>{errors.name?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("address", { autoComplete: "off" })}
            placeholder="Address"
            style={{ borderColor: errors.address && "#E85050" }}
            defaultValue={supplier.address}
          />
          <p>{errors.address?.message}</p>
        </InputWrap>
        <InputWrap>
          <Input
            {...register("suppliers", { autoComplete: "off" })}
            placeholder="Company"
            style={{ borderColor: errors.suppliers && "#E85050" }}
            defaultValue={supplier.suppliers}
          />
          <p>{errors.suppliers?.message}</p>
        </InputWrap>
        <InputWrap>
          <Controller
            control={control}
            name="date"
            render={({ field, fieldState }) => {
              return (
                <DatePick
                  status={fieldState.error ? "error" : undefined}
                  ref={field.ref}
                  name={field.name}
                  onBlur={field.onBlur}
                  placeholder={getDate(supplier.date)}
                  value={field.value ? field.value : null}
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
            defaultValue={supplier.amount}
          />
          <p>{errors.amount?.message}</p>
        </InputWrap>
        <InputWrap>
          <Controller
            control={control}
            name="status"
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? "error" : undefined}
                name={name}
                ref={ref}
                options={options}
                placeholder={supplier.status}
                value={options.find((option) => option.value === value)}
                onChange={(selectedOption) => onChange(selectedOption?.value)}
              />
            )}
          />
          <p>{errors.status?.message}</p>
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

export default EditSupplier;
