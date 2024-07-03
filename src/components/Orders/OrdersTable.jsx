import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrders } from "../../redux/admin/selectors";
import { getOrders } from "../../redux/admin/operations";
import userImg from "../../images/no-user-image.webp";
import { Status, Table, TableWrap } from "./Orders.styled";
import {
  FirstRow,
  TableSubTitle,
  TableTitle,
} from "../Dashboard/Dashboard.styled";
import { getDate } from "../../services/getDate";

const OrdersTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  console.log(orders);

  useEffect(() => {
    dispatch(getOrders({ page }));
  }, [dispatch, page]);

  return (
    <>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <TableTitle colSpan="6">All Orders</TableTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableSubTitle>User Info</TableSubTitle>
              <TableSubTitle>Address</TableSubTitle>
              <TableSubTitle>Products</TableSubTitle>
              <TableSubTitle>Order Date</TableSubTitle>
              <TableSubTitle>Price</TableSubTitle>
              <TableSubTitle>Status</TableSubTitle>
            </tr>
            {orders?.map((order) => (
              <tr key={order._id}>
                <FirstRow>
                  <img
                    src={order.photo ? order.photo : userImg}
                    alt="customer"
                  />
                  <span>{order.name}</span>
                </FirstRow>
                <td>{order.address}</td>
                <td>{order.products}</td>
                <td>{getDate(order.order_date)}</td>
                <td>{order.price}</td>
                <td>
                  <Status $variant={order.status}>{order.status}</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </>
  );
};

export default OrdersTable;
