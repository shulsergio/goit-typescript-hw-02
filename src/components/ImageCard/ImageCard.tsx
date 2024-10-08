import { PhotoItemProps } from "../Api/types";
import css from "./ImageCard.module.css";

interface ImageCardProps{
    photo: PhotoItemProps;
    openModal:(regular:string, alt:string)=> void;
}



const ImageCard: React.FC<ImageCardProps>= ({ photo, openModal }) => {
    const regular = photo.urls.regular;
    // console.log('Regular URL:', regular); 

    return (
        <div className={css.item}>
            <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className={css.img}
                onClick={() => openModal(regular, photo.alt_description)}
            />
        </div>
    );
}
export default ImageCard;