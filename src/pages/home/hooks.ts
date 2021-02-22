import { useState } from 'react';

import api from 'api';
import axios from 'axios';

import {
  StateType,
  fetchType,
  UseComicsType,
  fetchDataType,
  RequestResponse,
  fetchMoreType,
} from './types';
import { getFormattedComics, getUrl } from './utils';

export const useComics: UseComicsType = props => {
  const [state, setState] = useState<StateType>({
    limit: 20,
    offset: 0,
    size: 0,
    total: 0,
    comics: [],
  });

  const fetchData: fetchDataType = async params => {
    const url = getUrl(params);

    try {
      const {
        data: {
          data: { results, total, limit, offset },
        },
      } = await api({ ...params, url });

      return { results, total, limit, offset } as RequestResponse;
    } catch (e) {
      return { ...state, results: [] };
    }
  };

  const fetchComics: fetchType = async params => {
    const { results, total, limit, offset } = await fetchData(params);

    const comics = getFormattedComics(results);

    const newComics =
      params.startYear === state.startYear && params.title === state.title
        ? [...state.comics, ...comics]
        : comics;

    setState(state => ({
      ...state,
      comics: newComics,
      size: comics.length,
      total,
      limit,
      offset,
      title: params.title,
      startYear: params.startYear,
    }));
  };

  const fetchMoreComics: fetchMoreType = async () => {
    fetchComics({
      limit: 20,
      offset: state.offset + state.limit,
      title: state.title,
      startYear: state.startYear,
    });
  };

  return { fetchComics, fetchMoreComics, state };
};
