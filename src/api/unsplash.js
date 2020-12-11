import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qgNlVdhsJ062smvqA6hAQn567TqEQodXojjdHTFh6bw',
  },
});
