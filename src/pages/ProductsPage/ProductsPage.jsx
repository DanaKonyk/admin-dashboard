import SideBar from "../../components/Header/SideBar";
import { Wrap } from "../DashboardPage/DashboardPage";

const ProductsPage = () => {
  const screenWidth = window.innerWidth;
  return <Wrap>{screenWidth > 1439 && <SideBar />}</Wrap>;
};

export default ProductsPage;
