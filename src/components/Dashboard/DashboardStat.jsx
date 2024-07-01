import sprite from "../../images/sprite.svg";
import { Amount, List, StatWrap, Title } from "./Dashboard.styled";

const DashboardStat = () => {
  return (
    <List>
      <li>
        <StatWrap>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Title>All Products</Title>
          <Amount>000</Amount>
        </StatWrap>
      </li>
      <li>
        <StatWrap>
          <svg>
            <use href={`${sprite}#icon-users`} />
          </svg>
          <Title>All Suppliers</Title>
          <Amount>000</Amount>
        </StatWrap>
      </li>
      <li>
        <StatWrap>
          <svg>
            <use href={`${sprite}#icon-users`} />
          </svg>
          <Title>All Customers</Title>
          <Amount>000</Amount>
        </StatWrap>
      </li>
    </List>
  );
};

export default DashboardStat;
