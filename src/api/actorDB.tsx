import axios from 'axios';

const actorDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/person',
  params: {
    api_key: 'e45ab9f884d7887d308af0a06031be0c',
    language: 'en-US'
  }
});

export default actorDB;