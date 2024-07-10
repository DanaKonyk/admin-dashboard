import styled from "styled-components";
import SideBar from "../../components/Header/SideBar";
import DashboardStat from "../../components/Dashboard/DashboardStat";
import DashboardTable from "../../components/Dashboard/DashboardTable";

const DashboardPage = () => {
  const screenWidth = window.innerWidth;
  return (
    <Wrap>
      {screenWidth > 1439 && <SideBar />}
      <DashboardStat />
      <DashboardTable />
    </Wrap>
  );
};

export const Wrap = styled.div`
  inline-size: 375px;
  padding-inline: 20px;
  margin: 0 auto;

  @media (width > 767px) {
    inline-size: 768px;
    padding-inline: 32px;
  }

  @media (width > 1439px) {
    inline-size: 1440px;
    padding-inline: 40px;
  }
`;

export default DashboardPage;
