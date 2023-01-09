import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, id }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(showModal => !showModal);

  return (
    <>
      <li className={css.ImageGalleryItem} onClick={toggleModal} key={id}>
        <img
          className={css.ImageGalleryItem__image}
          src={webformatURL}
          alt={tags}
          url={largeImageURL}
        />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} width={800} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
