import { useDispatch } from "react-redux";
import SideBar from "../../components/Header/SideBar";
import { Wrap } from "../DashboardPage/DashboardPage";
import { useForm } from "react-hook-form";
import sprite from "../../images/sprite.svg";
import { getCustomers } from "../../redux/admin/operations";
import { FilterBtn, Form, Input } from "../../components/Orders/Orders.styled";
import CustomersTable from "../../components/Customers/CustomersTable";

const CustomersPage = () => {
  const screenWidth = window.innerWidth;
  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    dispatch(getCustomers(data));
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
      <CustomersTable />
    </Wrap>
  );
};

export default CustomersPage;
