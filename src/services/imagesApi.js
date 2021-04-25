import axios from 'axios';

const apiKey = '21082651-9188b9bfb810422ce45a2516d';
axios.defaults.baseURL = 'https://pixabay.com';

const fetchImages = (searchQuery = '', page = 1) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data);
};

export default fetchImages;
