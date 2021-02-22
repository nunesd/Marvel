import React, { useState } from 'react';
import Modal from 'react-modal';

import Comic from './Comic';

import { ComicsType } from './types';
import { ComicDataType } from './Comic/types';

import './styles.css';

const Comics = ({ comics }: ComicsType): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);
  const [modalComic, setModalComic] = useState<ComicDataType | undefined>();

  const onClickComic = (comic: ComicDataType) => {
    setModalComic(comic);
    toggleModal(true);
  };

  const toggleModal = (value: boolean) => {
    setisOpen(value);
  };

  return (
    <div
      className={`comics-container${!comics?.length ? ' empty' : ''}`}
      data-testid={comics?.length ? 'comics-container' : 'empty'}
    >
      {comics?.length ? (
        comics.map(comic => (
          <Comic
            key={comic.id}
            {...comic}
            isDetail={false}
            onClick={onClickComic}
          />
        ))
      ) : (
        <h3>Não há quadrinhos disponíveis</h3>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        contentLabel="detalhe do quadrinho"
      >
        {modalComic && (
          <Comic {...modalComic} isDetail onClick={onClickComic} />
        )}
      </Modal>
    </div>
  );
};

export default Comics;
