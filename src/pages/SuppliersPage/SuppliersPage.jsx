import { useState } from "react";
import SideBar from "../../components/Header/SideBar";
import { Wrap } from "../DashboardPage/DashboardPage";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import sprite from "../../images/sprite.svg";
import { getSuppliers } from "../../redux/admin/operations";
import { ProductsWrap } from "../../components/Products/Products.styled";
import { FilterBtn, Form, Input } from "../../components/Orders/Orders.styled";
import { BtnSupAdd } from "../../components/Suppliers/Suppliers.styled";
import SuppliersTable from "../../components/Suppliers/SuppliersTable";

const SuppliersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const screenWidth = window.innerWidth;
  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    dispatch(getSuppliers(data));
    reset();
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <Wrap>
      {screenWidth > 1439 && <SideBar />}
      <ProductsWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", { autoComplete: "off" })}
            placeholder="User Name"
          />
          <FilterBtn type="submit">
            <span>Filter</span>
            <svg width="14" height="14">
              <use href={`${sprite}#icon-filter`} />
            </svg>
          </FilterBtn>
        </Form>

        <BtnSupAdd type="button" onClick={openModal}>
          <span>Add a new product</span>
        </BtnSupAdd>
      </ProductsWrap>
      <SuppliersTable />
    </Wrap>
  );
};

export default SuppliersPage;
