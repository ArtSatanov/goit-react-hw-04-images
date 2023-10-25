import axios from 'axios';

export async function fetchImages(searchQuery, currentPage) {
  const params = new URLSearchParams({
    key: '39273189-3f8e43104201480407e7841b8',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    q: searchQuery.trim().toLowerCase(),
    page: currentPage,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response.data;
}
