import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Flex } from '../../../structure';
import { Button } from '../../../form';

import * as S from './Box.style';

export const Box = ({ name, image, marginBottom, price, onClick }) => {
  const { formatMessage } = useIntl();

  return (
    <S.Box marginBottom={marginBottom}>
      <S.ImgCard src={image} />
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
        {formatMessage({ id: 'button.add' })}
      </Button>
    </S.Box>
  );
};

Box.defaultProps = {
  image: '',
  marginBottom: 0,
};

Box.propTypes = {
  image: PropTypes.string,
  marginBottom: PropTypes.number,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
