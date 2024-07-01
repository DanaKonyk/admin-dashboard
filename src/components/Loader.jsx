import { MoonLoader } from "react-spinners";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWrap>
      <MoonLoader
        size={100}
        color="#59B17A"
        aria-label="circle-loading"
        radius="1"
      />
    </LoaderWrap>
  );
};

const LoaderWrap = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loader;
