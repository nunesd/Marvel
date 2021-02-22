export type ComicDataType = {
  id: number;
  img: string;
  title: string;
  printPrice?: number;
  digitalPrice?: number;
};

export type ComicType = ComicDataType & {
  isDetail: boolean;
  onClick?: (comic: ComicDataType) => void;
};
