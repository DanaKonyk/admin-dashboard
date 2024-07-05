import { useForm } from "react-hook-form";
import SideBar from "../../components/Header/SideBar";
import { Wrap } from "../DashboardPage/DashboardPage";
import { useState } from "react";
import sprite from "../../images/sprite.svg";
import { getProducts } from "../../redux/admin/operations";
import { FilterBtn, Form, Input } from "../../components/Orders/Orders.styled";
import { useDispatch } from "react-redux";
import {
  BtnAdd,
  BtnWrap,
  ProductsWrap,
} from "../../components/Products/Products.styled";
import ProductsTable from "../../components/Products/ProductsTable";

const ProductsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const screenWidth = window.innerWidth;
  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    dispatch(getProducts(data));
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
    <>
      <Wrap>
        {screenWidth > 1439 && <SideBar />}
        <ProductsWrap>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("name", { autoComplete: "off" })}
              placeholder="Product Name"
            />
            <FilterBtn type="submit">
              <span>Filter</span>
              <svg width="14" height="14">
                <use href={`${sprite}#icon-filter`} />
              </svg>
            </FilterBtn>
          </Form>
          <BtnWrap>
            <BtnAdd type="button" onClick={openModal}>
              <svg>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </BtnAdd>
            <span>Add a new product</span>
          </BtnWrap>
        </ProductsWrap>
        <ProductsTable />
      </Wrap>
    </>
  );
};

export default ProductsPage;
