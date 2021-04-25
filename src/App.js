import React, { Component } from 'react';

import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Spiner from './components/Spiner/Spiner';

import fetchImages from './services/imagesApi';
import scroll from './services/scroll';

class App extends Component {
  state = {
    gallery: [],
    page: 1,
    searchQuery: '',
    largeImageURL: '',
    largeImageAlt: '',
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, gallery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchImg();
    }

    if (gallery.length) {
      scroll();
    }
  }

  onChangeQuery = inputValue => {
    if (!inputValue) {
      return;
    }
    this.setState({ gallery: [], page: 1, searchQuery: inputValue });
  };

  fetchImg = () => {
    const { page, searchQuery } = this.state;

    this.setState({ isLoading: true });

    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleImgClick = e => {
    const url = e.currentTarget.dataset.url;
    const alt = e.currentTarget.attributes.alt.value;

    this.setState({ largeImageURL: url, largeImageAlt: alt }, () =>
      this.toggleModal(),
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const {
      gallery,
      showModal,
      largeImageURL,
      largeImageAlt,
      isLoading,
    } = this.state;

    return (
      <div className="App">
        {showModal && (
          <Modal
            url={largeImageURL}
            alt={largeImageAlt}
            onClose={this.toggleModal}
          />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery galleryList={gallery} onImgClick={this.handleImgClick} />
        {gallery.length > 0 && !isLoading && (
          <Button label="Load more" onBtnClick={this.fetchImg} />
        )}
        {isLoading && <Spiner />}
      </div>
    );
  }
}

export default App;
