import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryList, onImgClick }) => (
  <ul className="ImageGallery">
    {galleryList.map(({ id, largeImageURL, webformatURL, tags }) => (
      <ImageGalleryItem
        key={id}
        url={webformatURL}
        alt={tags}
        dataUrl={largeImageURL}
        onListItemClick={onImgClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  galleryList: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
