import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tinder-clone-backend197.herokuapp.com",
});

export default instance;