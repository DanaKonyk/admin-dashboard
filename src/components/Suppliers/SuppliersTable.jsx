import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSuppliers } from "../../redux/admin/selectors";
import { getSuppliers } from "../../redux/admin/operations";
import {
  BtnPageWrap,
  PageBtn,
  Status,
  Table,
  TableWrap,
} from "../Orders/Orders.styled";
import userImg from "../../images/no-user-image.webp";
import sprite from "../../images/sprite.svg";
import {
  FirstRow,
  TableSubTitle,
  TableTitle,
} from "../Dashboard/Dashboard.styled";
import { getDate } from "../../services/getDate";
import { BtnSupEdit } from "./Suppliers.styled";

const SuppliersTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const suppliersData = useSelector(selectSuppliers);
  const suppliers = suppliersData.result;

  const totalPages = Math.ceil(suppliersData.total / 5);
  const handleForward = () =>
    page === totalPages ? undefined : setPage(page + 1);
  const handleBack = () => (page === 1 ? undefined : setPage(page - 1));

  useEffect(() => {
    dispatch(getSuppliers({ page }));
  }, [dispatch, page]);

  return (
    <>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <TableTitle colSpan="7">All Suppliers</TableTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableSubTitle>Suppliers Info</TableSubTitle>
              <TableSubTitle>Address</TableSubTitle>
              <TableSubTitle>Company</TableSubTitle>
              <TableSubTitle>Deliver date</TableSubTitle>
              <TableSubTitle>Amount</TableSubTitle>
              <TableSubTitle>Status</TableSubTitle>
              <TableSubTitle>Action</TableSubTitle>
            </tr>
            {suppliers?.map((supplier) => (
              <tr key={supplier._id}>
                <FirstRow>
                  <img
                    src={supplier.photo ? supplier.photo : userImg}
                    alt="customer"
                  />
                  <span>{supplier.name}</span>
                </FirstRow>
                <td>{supplier.address}</td>
                <td>{supplier.suppliers}</td>
                <td>{getDate(supplier.date)}</td>
                <td>{supplier.amount}</td>
                <td>
                  <Status $variant={supplier.status}>{supplier.status}</Status>
                </td>
                <td>
                  <BtnSupEdit type="button">
                    <svg>
                      <use href={`${sprite}#icon-edit`} />
                    </svg>
                    <span>Edit</span>
                  </BtnSupEdit>
                </td>
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

export default SuppliersTable;
