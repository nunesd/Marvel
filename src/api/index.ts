import axios from 'axios';
import md5 from 'js-md5';

export default () => {
  const {
    REACT_APP_PUBLIC_KEY: PUBLIC_KEY,
    REACT_APP_PRIVATE_KEY: PRIVATE_KEY,
  } = process.env;

  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + PRIVATE_KEY! + PUBLIC_KEY!);

  return axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash: hash.hex(),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: '*/*',
    },
    timeout: 10000,
    method: 'get',
    responseType: 'json',
  });
};
