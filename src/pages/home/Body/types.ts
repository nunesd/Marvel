import { ComicDataType } from './Comics/Comic/types';

import { HeaderType } from './Header/types';

export type BodyProps = HeaderType & {
  comics?: Array<ComicDataType>;
  onSeeMore: () => void;
  canSeeMore: boolean;
};
