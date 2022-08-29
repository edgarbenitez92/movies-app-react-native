import axios from 'axios';

const searchDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
  params: {
    api_key: 'e45ab9f884d7887d308af0a06031be0c',
    language: 'en-US'
  }
});

export default searchDB;