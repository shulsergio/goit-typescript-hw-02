import Modal from "react-modal";
import css from './ImageModal.module.css'; 

Modal.setAppElement("#root");

interface ImageModal{
  urlModal: string;
  altModal: string;
  modalIsOpen: boolean;
  closeModal: ()=>void;
}


const ImageModal: React.FC<ImageModal>=({ urlModal, altModal, modalIsOpen, closeModal }) =>{
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