import { useForm } from "react-hook-form";
import SideBar from "../../components/Header/SideBar";
import { Wrap } from "../DashboardPage/DashboardPage";
import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { getOrders } from "../../redux/admin/operations";
import { FilterBtn, Form, Input } from "../../components/Orders/Orders.styled";
import OrdersTable from "../../components/Orders/OrdersTable";

const OrdersPage = () => {
  const screenWidth = window.innerWidth;
  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    dispatch(getOrders(data));
    console.log(data);
    reset();
  };

  return (
    <Wrap>
      {screenWidth > 1439 && <SideBar />}
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
      <OrdersTable />
    </Wrap>
  );
};

export default OrdersPage;
