import { useState } from 'react';
import { ModalСomponent } from '../Modal/Modal';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
  const [isModalOpen, setModalStatus] = useState(false);

  const openModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImage
        src={smallImg}
        alt={tags}
        onClick={() => openModal()}
      />
      <div></div>
      <ModalСomponent
        isModalOpen={isModalOpen}
        imgModal={largeImg}
        altModal={tags}
        closeModal={closeModal}
      />
    </ImageGalleryItemLi>
  );
};
