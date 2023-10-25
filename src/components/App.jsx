import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Layout } from './App.styled';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gallaryItems, setGallaryItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState('');

  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setGallaryItems([]);
    setTotalHits('');
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        const images = await fetchImages(searchQuery, page);
        setGallaryItems(prevState => [...prevState, ...images.hits]);
        setTotalHits(images.totalHits);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [searchQuery, page]);

  return (
    <Layout>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {gallaryItems.length > 0 && <ImageGallery images={gallaryItems} />}
      {Number(totalHits) / 12 >= page && <Button OnClick={handleLoadMore} />}
    </Layout>
  );
};
