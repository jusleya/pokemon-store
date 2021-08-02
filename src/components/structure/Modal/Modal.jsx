/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IcClose } from '../../../assets/icons';

import * as S from './Modal.style';

export const Modal = ({ showModal, cashback }) => {
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    if (closeModal) showModal(false);
  }, [closeModal, showModal]);

  return (
    <S.Modal>
      <S.Container>
        <S.Title close={closeModal}>
          <h3>Compra Finalizada</h3>
          <IcClose
            onClick={() => {
              setCloseModal(!closeModal);
              window.location.reload(true);
            }}
          />
        </S.Title>
        <S.Text>
          Obrigada por sua compra!
          <br />
          Você ganhou{' '}
          {cashback.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          de cashback!
        </S.Text>
      </S.Container>
    </S.Modal>
  );
};

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  cashback: PropTypes.number.isRequired,
};
