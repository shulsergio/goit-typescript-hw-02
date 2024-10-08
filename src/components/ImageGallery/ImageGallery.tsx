import { PhotoItemProps } from "../Api/types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";


interface ImageGallery{
  photos: PhotoItemProps[];
  openModal: (regular:string, alt:string)=> void;
}
const ImageGallery: React.FC<ImageGallery> = ({ photos = [], openModal }) => {
  // console.log(photos);
  return (
    <ul className={css.box}>
      {photos.map((item) => (
        <li key={item.id} className={css.list}>
          <ImageCard photo={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
