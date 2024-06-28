import styled from "styled-components";
import RegistrationForm from "../../components/AuthForms/RegistrationForm";

const RegistrationPage = () => {
  return (
    <Wrap>
      <RegistrationForm />
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

export default RegistrationPage;
