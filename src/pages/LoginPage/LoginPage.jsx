import styled from "styled-components";
import LoginForm from "../../components/AuthForms/LoginForm";

const LoginPage = () => {
  return (
    <Wrap>
      <LoginForm />
    </Wrap>
  );
};

export const Wrap = styled.div`
  inline-size: 375px;
  padding-inline: 20px;

  @media (width > 767px) {
    inline-size: 768px;
    padding-inline: 32px;
  }

  @media (width > 1439px) {
    inline-size: 1440px;
    padding-inline: 40px;
  }
`;

export default LoginPage;
