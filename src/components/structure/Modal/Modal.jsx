import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { IcClose } from '../../../assets/icons';

import * as S from './Modal.style';

export const Modal = ({ showModal, cashback }) => {
  const { formatMessage } = useIntl();
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    if (closeModal) showModal(false);
  }, [closeModal, showModal]);

  return (
    <S.Modal>
      <S.Container>
        <S.Title close={closeModal}>
          <h3>{formatMessage({ id: 'modal.completed' })}</h3>
          <IcClose
            onClick={() => {
              setCloseModal(!closeModal);
              window.location.reload(true);
            }}
          />
        </S.Title>
        <S.Text>
          {formatMessage({ id: 'modal.thanks' })}
          <br />
          {formatMessage({ id: 'modal.youWon' })}
          {cashback.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
          <span>{formatMessage({ id: 'modal.back' })}</span>
        </S.Text>
      </S.Container>
    </S.Modal>
  );
};

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  cashback: PropTypes.number.isRequired,
};
