import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

import Loader from './components/Loader/Loader.jsx';
import { Heading } from './components/Heading/Heading.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import { fetchPhotoItems } from './components/Api/apiPhotos.js';

function App() {

interface PhotoItem {
  id: string; 
  urls: {
    regular: string;
    small: string;
  };
alt_description: string; 
}


  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [empty, setEmpty] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [itemModal, setItemModal] = useState<string>("");
  const [altModal, setaltModal] = useState<string>("");
  
  
  useEffect(() => {
            const per_page = 12;
    if (!query) {
      return;
    }
    const fetchData = async () => {

      setLoading(true);
      setError(null);
try {
      const {results, total} = await fetchPhotoItems(query, page, per_page);

        if(!results.length){
          return setEmpty(true)
        } 
  setPhotos((prevPhotos: PhotoItem[]) => [...prevPhotos, ...results]);

        setVisible(page*per_page < total);

} catch (error) {
setError(error instanceof Error ? error.message : 'Something went wrong')
}
     finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const onHandleSubmit = (searchQuery:string): void => {
    setQuery(searchQuery);
    setPhotos([]);
    setPage(1);
    setError(null);
    setVisible(false);
    setEmpty(false);
  };

  const handleLoadMoreBtn = ():void => {
    setPage(page + 1);
  };

function openModal(regular:string, alt:string):void {
    setModalIsOpen(true);
    setItemModal(regular);
    setaltModal(alt);
  }

function closeModal():void {
    setModalIsOpen(false);
    setItemModal('');
    setaltModal('');
  }



  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {loading && <Loader />}
      {error && <Heading title="Something wrong, try again..." />}
      {photos.length > 0 && <ImageGallery photos={photos} openModal={openModal} />}
      {empty && <Heading title="no images, try again..." />}

{visible && (
    <LoadMoreBtn onLoadMoreBtn={handleLoadMoreBtn} />
      )} 
      
      <ImageModal
    urlModal={itemModal}
    altModal={altModal}
    modalIsOpen={modalIsOpen}
    closeModal={closeModal}
/>
    </>
  );
}

export default App;
