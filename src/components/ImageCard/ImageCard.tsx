import css from "./ImageCard.module.css";

interface PhotoImg{
  id: string; 
  urls: {
    regular: string;
    small: string;
  };
alt_description: string; 
}

interface ImageCardProps{
    photo: PhotoImg;
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