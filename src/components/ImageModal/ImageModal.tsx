import Modal from "react-modal";
import css from './ImageModal.module.css'; 
import { ImageModalProps } from "../Api/types";

Modal.setAppElement("#root");


const ImageModal: React.FC<ImageModalProps>=({ urlModal, altModal, modalIsOpen, closeModal }) =>{
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.content} 
      overlayClassName={css.overlay} 
    >
      <img src={urlModal} alt={altModal} />
    </Modal>
  );
}
export default ImageModal;