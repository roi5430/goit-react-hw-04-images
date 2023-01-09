import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryItems }) => {
  return (
    <ul className={css.ImageGallery}>
      {galleryItems.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          tags={item.tags}
          largeImageURL={item.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.array.isRequired,
};
