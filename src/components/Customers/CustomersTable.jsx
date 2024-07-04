import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCustomers } from "../../redux/admin/selectors";
import { getCustomers } from "../../redux/admin/operations";
import {
  BtnPageWrap,
  PageBtn,
  Table,
  TableWrap,
} from "../Orders/Orders.styled";
import userImg from "../../images/no-user-image.webp";
import {
  FirstRow,
  TableSubTitle,
  TableTitle,
} from "../Dashboard/Dashboard.styled";
import { getDate } from "../../services/getDate";

const CustomersTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const customersData = useSelector(selectCustomers);
  const customers = customersData.result;

  const totalPages = Math.ceil(customersData.total / 5);
  const handleForward = () =>
    page === totalPages ? undefined : setPage(page + 1);
  const handleBack = () => (page === 1 ? undefined : setPage(page - 1));

  useEffect(() => {
    dispatch(getCustomers({ page }));
  }, [dispatch, page]);

  return (
    <>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <TableTitle colSpan="5">Customers Data</TableTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableSubTitle>User Info</TableSubTitle>
              <TableSubTitle>Email</TableSubTitle>
              <TableSubTitle>Address</TableSubTitle>
              <TableSubTitle>Phone</TableSubTitle>
              <TableSubTitle>Register Date</TableSubTitle>
            </tr>
            {customers?.map((customer) => (
              <tr key={customer._id}>
                <FirstRow>
                  <img
                    src={customer.photo ? customer.photo : userImg}
                    alt="customer"
                  />
                  <span>{customer.name}</span>
                </FirstRow>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>{getDate(customer.register_date)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
      <BtnPageWrap>
        <PageBtn
          onClick={handleBack}
          type="button"
          disabled={page === 1 ? true : false}
        >
          Back
        </PageBtn>
        <p>
          <span>{page}</span> / {totalPages}
        </p>
        <PageBtn
          onClick={handleForward}
          type="button"
          disabled={page === totalPages ? true : false}
        >
          Next
        </PageBtn>
      </BtnPageWrap>
    </>
  );
};

export default CustomersTable;
