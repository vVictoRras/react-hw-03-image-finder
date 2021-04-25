import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt, dataUrl, onListItemClick }) => (
  <li className="ImageGalleryItem">
    <img
      className="ImageGalleryItem-image"
      src={url}
      alt={alt}
      data-url={dataUrl}
      onClick={onListItemClick}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  onListItemClick: PropTypes.func.isRequired,
  url: PropTypes.string,
  alt: PropTypes.string,
  dataUrl: PropTypes.string,
};

export default ImageGalleryItem;
