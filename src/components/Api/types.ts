export interface PhotoItemProps {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

export interface Response {
  results: PhotoItemProps[];
  total: number;
}

export interface ImageModalProps{
  urlModal: string;
  altModal: string;
  modalIsOpen: boolean;
  closeModal: ()=>void;
}