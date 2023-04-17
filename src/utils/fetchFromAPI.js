import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const theApiKey = process.env.RAPID_API_KEY;
// console.log('***THE KEY**', theApiKey);

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '59e40e4f32msh98c880a91dc9eccp1c029bjsn9f898224d381',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
