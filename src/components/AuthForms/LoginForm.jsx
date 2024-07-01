import { useForm } from "react-hook-form";
import logo from "../../images/logo.png";
import pill from "../../images/white-pill.png";
import { authSchema } from "../../services/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
import { Notify } from "notiflix";
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
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(authSchema), mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      await dispatch(logIn(data)).unwrap();
      reset();
    } catch (error) {
      if (error) {
        Notify.failure("Wrong email or password. Please try again");
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <Input
              {...register("email", { autoComplete: "off" })}
              placeholder="Email address"
              style={{ borderColor: errors.email ? "#E85050" : "#59b17a" }}
            />
            <p>{errors.email?.message}</p>
          </InputWrap>
          <InputWrap>
            <Input
              {...register("password", { autoComplete: "off" })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              style={{ borderColor: errors.password ? "#E85050" : "#59b17a" }}
            />
            <p>{errors.password?.message}</p>
            <EyeBtn type="button" onClick={() => toggleShowPassword()}>
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
          <BtnSubmit type="submit">Log in</BtnSubmit>
          <StyledLink to="/register">
            Click here in order to register
          </StyledLink>
        </Form>
        <BgImg />
      </MainWrap>
    </>
  );
};

export default LoginForm;
