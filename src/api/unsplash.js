import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 2bc2106866f21d4a7bb57e53acb948355972a9e82f6b593624d26d6f8f2c4585"
      }
});

