import { createPortal } from "react-dom";
import Modal from "react-modal";
import sprite from "../../images/sprite.svg";
import { BtnClose, BtnCloseWrap } from "./Modal.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid rgba(104, 104, 104, 0.2)",
    borderRadius: "12px",
    zIndex: "1300",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(20,20,20, 0.6)",
    zIndex: "10",
  },
};

const modalRoot = document.querySelector("#modal-root");

const ModalBody = ({ isOpen, onRequestClose, children }) => {
  return createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <BtnCloseWrap>
        <BtnClose type="button" onClick={onRequestClose}>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </BtnClose>
      </BtnCloseWrap>
      <div>{children}</div>
    </Modal>,
    modalRoot
  );
};

export default ModalBody;
