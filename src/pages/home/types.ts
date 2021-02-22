import { ComicDataType } from './Body/Comics/Comic/types';

export type HomeType = {
  publicKey?: string;
  privateKey?: string;
  time?: string;
};

export type RequestResponse = {
  results: Array<any>;
  total: number;
  offset: number;
  limit: number;
};

export type ParamsType = {
  offset: number;
  limit: number;
  title?: string;
  startYear?: number;
};

export type StateType = {
  size: number;
  total: number;
  comics: Array<ComicDataType>;
} & ParamsType;

export type fetchType = (params: ParamsType) => void;

export type fetchMoreType = () => void;

export type fetchDataType = (params: ParamsType) => Promise<RequestResponse>;

export type UseComicsType = (
  props: HomeType,
) => {
  fetchComics: fetchType;
  fetchMoreComics: fetchMoreType;
  state: StateType;
};
