import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrders } from "../../redux/admin/selectors";
import { getOrders } from "../../redux/admin/operations";
import userImg from "../../images/no-user-image.webp";
import {
  BtnPageWrap,
  PageDot,
  Status,
  Table,
  TableWrap,
} from "./Orders.styled";
import {
  FirstRow,
  TableSubTitle,
  TableTitle,
} from "../Dashboard/Dashboard.styled";
import { getDate } from "../../services/getDate";

const OrdersTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const ordersData = useSelector(selectOrders);
  const orders = ordersData.result;

  const totalPages = Math.ceil(ordersData.total / 5);

  console.log(totalPages);

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
                  <img src={userImg} alt="customer" />
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
      {totalPages > 0 && (
        <BtnPageWrap>
          {[...Array(totalPages)].map((_, index) => (
            <PageDot
              key={index}
              active={page === index + 1}
              onClick={() => setPage(index + 1)}
            />
          ))}
        </BtnPageWrap>
      )}
    </>
  );
};

export default OrdersTable;
