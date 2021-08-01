import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { Flex } from '../../../structure';
import { Button } from '../../../form';

import * as S from './Box.style';

export const Box = ({ name, marginBottom, onClick }) => {
  const price = 100;

  return (
    <S.Box marginBottom={marginBottom}>
      <S.ImgCard />
      <Flex
        height={100}
        direction="column"
        alignItems="center"
        spaceBetween={8}
      >
        <S.Title>{name}</S.Title>
        <S.Price>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </S.Price>
      </Flex>
      <Button onClick={onClick} fullWidth>
        Adicionar
      </Button>
    </S.Box>
  );
};

Box.defaultProps = {
  marginBottom: 0,
};

Box.propTypes = {
  marginBottom: PropTypes.number,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
