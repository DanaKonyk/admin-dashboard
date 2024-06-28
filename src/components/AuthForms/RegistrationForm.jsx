import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../services/validationSchemas";
import logo from "../../images/logo.png";
import pill from "../../images/white-pill.png";
import sprite from "../../images/sprite.svg";
import {
  BgImg,
  BtnSubmit,
  EyeBtn,
  Form,
  ImgWrap,
  Input,
  InputWrap,
  MainWrap,
  StyledLink,
  TitleWrap,
} from "./AuthForms.styled";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onBlur" });

  return (
    <>
      <ImgWrap>
        <img src={logo} alt="logo" />
        <span>E-Pharmacy</span>
      </ImgWrap>
      <MainWrap>
        <TitleWrap>
          <h1>
            Your medication, delivered Say goodbye to all{" "}
            <span>your healthcare</span> worries with us
          </h1>
          <img src={pill} alt="pill" />
        </TitleWrap>
        <Form>
          <InputWrap>
            <Input placeholder="Email address" />
            <p>{errors.email?.message}</p>
          </InputWrap>
          <InputWrap>
            <Input placeholder="Password" />
            <p>{errors.email?.message}</p>
            <EyeBtn>
              <svg width="18" height="18" stroke="#1D1E21" fill="none">
                <use
                  href={
                    showPassword
                      ? `${sprite}#icon-eye`
                      : `${sprite}#icon-eye-off`
                  }
                />
              </svg>
            </EyeBtn>
          </InputWrap>
          <BtnSubmit type="submit">Sign in</BtnSubmit>
          <StyledLink to="/login">
            Already has an account? Click here in order to log in
          </StyledLink>
        </Form>
        <BgImg />
      </MainWrap>
    </>
  );
};

export default RegistrationForm;
