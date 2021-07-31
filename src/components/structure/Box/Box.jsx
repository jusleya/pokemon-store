import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { Flex } from '..';
import { Button } from '../../form';

import * as S from './Box.style';

export const Box = ({ name, marginBottom }) => {
  const price = 100;

  return (
    <S.Box marginBottom={marginBottom}>
      <S.ImgCard />
      <Flex direction="column" alignItems="center" spaceBetween={8}>
        <S.Title>{name}</S.Title>
        <S.Price>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </S.Price>
      </Flex>
      <Button fullWidth>Adicionar</Button>
    </S.Box>
  );
};

Box.defaultProps = {
  marginBottom: 0,
};

Box.propTypes = {
  marginBottom: PropTypes.number,
  name: PropTypes.string.isRequired,
};
