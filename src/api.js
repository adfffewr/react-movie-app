// api.js

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const movieGet = () => {
  // 서버에 요청을 보냄
  return axios.get('/movie/now_playing', {
    params: {
      api_key: 'a992d1fae6c06b990f53908e421ee199',
      language: 'ko',
    },
  });
};

export const detailGet = (id) => {
  return axios.get(`/movie/${id}`, {
    params: {
      api_key: 'a992d1fae6c06b990f53908e421ee199',
      language: 'ko',
    },
  });
};
