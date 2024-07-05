import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/admin/selectors";
import { deleteProduct, getProducts } from "../../redux/admin/operations";
import {
  BtnPageWrap,
  PageBtn,
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
import { BtnModify, TableBtnWrap } from "./Products.styled";

const ProductsTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const productsData = useSelector(selectProducts);
  const products = productsData.result;

  const totalPages = Math.ceil(productsData.total / 5);
  const handleForward = () =>
    page === totalPages ? undefined : setPage(page + 1);
  const handleBack = () => (page === 1 ? undefined : setPage(page - 1));

  useEffect(() => {
    dispatch(getProducts({ page }));
  }, [dispatch, page]);

  return (
    <>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <TableTitle colSpan="6">All Products</TableTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableSubTitle>Product Info</TableSubTitle>
              <TableSubTitle>Category</TableSubTitle>
              <TableSubTitle>Stock</TableSubTitle>
              <TableSubTitle>Suppliers</TableSubTitle>
              <TableSubTitle>Price</TableSubTitle>
              <TableSubTitle>Action</TableSubTitle>
            </tr>
            {products?.map((product) => (
              <tr key={product._id}>
                <FirstRow>
                  <img
                    src={product.photo ? product.photo : userImg}
                    alt="customer"
                  />
                  <span>{product.name}</span>
                </FirstRow>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.suppliers}</td>
                <td>{product.price}</td>
                <td>
                  <TableBtnWrap>
                    <BtnModify type="button">
                      <svg>
                        <use href={`${sprite}#icon-edit`} />
                      </svg>
                    </BtnModify>
                    <BtnModify
                      type="button"
                      onClick={() => dispatch(deleteProduct(product._id))}
                    >
                      <svg>
                        <use href={`${sprite}#icon-trash`} />
                      </svg>
                    </BtnModify>
                  </TableBtnWrap>
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

export default ProductsTable;