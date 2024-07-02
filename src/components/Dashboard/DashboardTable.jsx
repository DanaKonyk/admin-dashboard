import { useDispatch, useSelector } from "react-redux";
import { selectDashboard } from "../../redux/admin/selectors";
import { getDashboard } from "../../redux/admin/operations";
import { useEffect } from "react";
import userImg from "../../images/user-img.webp";
import {
  FirstRow,
  Label,
  OneTableWrap,
  SecondRow,
  Table,
  TableSubTitle,
  TableTitle,
  TablesWrap,
} from "./Dashboard.styled";

const DashboardTable = () => {
  const dispatch = useDispatch();
  const { recentCustomers, incomeExpences } = useSelector(selectDashboard);

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);
  return (
    <TablesWrap>
      <OneTableWrap>
        <Table className="firstTable">
          <thead>
            <tr>
              <TableTitle colSpan="6">Recent Customers</TableTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableSubTitle>Name</TableSubTitle>
              <TableSubTitle>Email</TableSubTitle>
              <TableSubTitle>Spent</TableSubTitle>
            </tr>
            {recentCustomers?.map((customer) => (
              <tr key={customer._id}>
                <FirstRow>
                  <img
                    src={customer.photo ? customer.photo : userImg}
                    alt="customer"
                  />
                  <span>{customer.name}</span>
                </FirstRow>
                <td>{customer.email}</td>
                <td>{customer.spent}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </OneTableWrap>
      <OneTableWrap>
        <Table>
          <thead>
            <tr>
              <TableTitle colSpan="3">Income/Expenses</TableTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableSubTitle colSpan="3">Today</TableSubTitle>
            </tr>
            {incomeExpences?.map((item) => (
              <tr key={item._id}>
                <FirstRow>
                  <Label $variant={item.type}>{item.type}</Label>
                </FirstRow>
                <SecondRow>{item.name}</SecondRow>
                <td
                  style={{
                    color:
                      `${item.type}` === "Expence"
                        ? "#85050"
                        : `${item.type}` === "Income"
                        ? "#59B17A"
                        : "#1D1E21",
                    textDecoration:
                      `${item.type}` === "Error" && "line-through",
                  }}
                >
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </OneTableWrap>
    </TablesWrap>
  );
};

export default DashboardTable;
