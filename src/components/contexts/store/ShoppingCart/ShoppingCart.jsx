import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
// import { Button } from '../../../form';
// import { Flex } from '../../../structure';

import * as S from './ShoppingCart.style';

export const ShoppingCart = ({ list }) => {
  const { formatMessage } = useIntl();

  return (
    <S.Card>
      <S.Cart>{formatMessage({ id: 'store.cart' })}</S.Cart>
      <S.List>
        {list.map(({ listShopping }) => {
          const { id, name } = listShopping;
          return <p key={id}>{name}</p>;
        })}
      </S.List>
      {/* <Flex justifyContent="center">
        <Button>{formatMessage({ id: 'button.finalize' })}</Button>
      </Flex> */}
    </S.Card>
  );
};

ShoppingCart.defaultProps = {
  list: [],
};

ShoppingCart.propTypes = {
  list: PropTypes.array,
};
