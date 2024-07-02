import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import { Amount, List, StatWrap, Title } from "./Dashboard.styled";
import { selectDashboard } from "../../redux/admin/selectors";
import { useEffect } from "react";
import { getDashboard } from "../../redux/admin/operations";

const DashboardStat = () => {
  const dispatch = useDispatch();
  const { allSCustomers, allSProducts, allSuppliers } =
    useSelector(selectDashboard);

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  return (
    <List>
      <li>
        <StatWrap>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Title>All Products</Title>
          <Amount>{allSProducts}</Amount>
        </StatWrap>
      </li>
      <li>
        <StatWrap>
          <svg>
            <use href={`${sprite}#icon-users`} />
          </svg>
          <Title>All Suppliers</Title>
          <Amount>{allSuppliers}</Amount>
        </StatWrap>
      </li>
      <li>
        <StatWrap>
          <svg>
            <use href={`${sprite}#icon-users`} />
          </svg>
          <Title>All Customers</Title>
          <Amount>{allSCustomers}</Amount>
        </StatWrap>
      </li>
    </List>
  );
};

export default DashboardStat;
