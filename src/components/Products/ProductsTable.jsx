import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/admin/selectors";
import { deleteProduct, getProducts } from "../../redux/admin/operations";
import {
  BtnPageWrap,
  PageDot,
  Table,
  TableWrap,
} from "../Orders/Orders.styled";
import productImg from "../../images/no-product.jpeg";
import sprite from "../../images/sprite.svg";
import {
  FirstRow,
  TableSubTitle,
  TableTitle,
} from "../Dashboard/Dashboard.styled";
import { BtnModify, TableBtnWrap } from "./Products.styled";
import ModalBody from "../Modal/Modal";
import EditProduct from "../ModalContent/EditProduct";

const ProductsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setselectedProduct] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const productsData = useSelector(selectProducts);
  const products = productsData.result;

  const totalPages = Math.ceil(productsData.total / 5);

  useEffect(() => {
    dispatch(getProducts({ page }));
  }, [dispatch, page]);

  const openModal = (item) => {
    setIsModalOpen(true);
    setselectedProduct(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    dispatch(getProducts({ page }));
  };

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
                  <img src={productImg} alt="customer" />
                  <span>{product.name}</span>
                </FirstRow>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.suppliers}</td>
                <td>{product.price}</td>
                <td>
                  <TableBtnWrap>
                    <BtnModify type="button" onClick={() => openModal(product)}>
                      <svg>
                        <use href={`${sprite}#icon-edit`} />
                      </svg>
                    </BtnModify>
                    <BtnModify
                      type="button"
                      onClick={() => handleDelete(product._id)}
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
      {isModalOpen && (
        <ModalBody isOpen={isModalOpen} onRequestClose={closeModal}>
          <EditProduct onRequestClose={closeModal} product={selectedProduct} />
        </ModalBody>
      )}
    </>
  );
};

export default ProductsTable;
