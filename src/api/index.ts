import axios, { AxiosResponse } from 'axios';
import md5 from 'js-md5';

import { HomeType } from './../pages/home/types';

export default ({
  publicKey,
  privateKey,
  time,
  url,
}: HomeType & { url: string }): Promise<AxiosResponse<any>> => {
  const {
    REACT_APP_PUBLIC_KEY: PUBLIC_KEY,
    REACT_APP_PRIVATE_KEY: PRIVATE_KEY,
  } = process.env;

  const timestamp = time || Number(new Date());
  const hash = md5.create();
  hash.update(
    timestamp +
      (privateKey || (PRIVATE_KEY as string)) +
      (publicKey || (PUBLIC_KEY as string)),
  );

  return axios.get(url, {
    baseURL: 'http://gateway.marvel.com/v1/public',
    params: {
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash: hash.hex(),
    },
    timeout: 10000,
    method: 'get',
    responseType: 'json',
  });
};
