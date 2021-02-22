import { ComicDataType } from './Body/Comics/Comic/types';
import { ParamsType } from './types';

export const getUrl = (params: ParamsType) => {
  let url = `/comics?limit=${params.limit}&offset=${params.offset}`;

  if (params.title) {
    url += `&title=${params.title}`;
  }

  if (params.startYear) {
    url += `&startYear=${params.startYear}`;
  }

  return url;
};

export const getFormattedComics = (results: any): Array<ComicDataType> =>
  results.map((item: any) => ({
    id: item.id,
    title: item.title as string,
    img: `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`,
    printPrice: item.prices.find((price: any) => price.type === 'printPrice')
      ?.price,
    digitalPrice: item.prices.find(
      (price: any) => price.type === 'digitalPrice',
    )?.price,
  }));
