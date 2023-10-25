import { Component } from 'react';
import { ModalСomponent } from '../Modal/Modal';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { smallImg, largeImg, tags } = this.props;
    return (
      <ImageGalleryItemLi>
        <ImageGalleryItemImage
          src={smallImg}
          alt={tags}
          onClick={() => this.openModal()}
        />
        <div></div>
        <ModalСomponent
          isModalOpen={this.state.isModalOpen}
          imgModal={largeImg}
          altModal={tags}
          closeModal={this.closeModal}
        />
      </ImageGalleryItemLi>
    );
  }
}
