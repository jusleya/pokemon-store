import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Button } from '../../../form';
import { Flex, Modal } from '../../../structure';
import { IcCart } from '../../../../assets/icons';

import * as S from './ShoppingCart.style';

export const ShoppingCart = ({ list, price }) => {
  const { formatMessage } = useIntl();
  const [show, setShow] = useState(false);
  let cont = 0;
  let valueT = 0;

  return (
    <>
      <S.Card>
        <S.Cart spaceBetween={8}>
          <IcCart />
          <h3>{formatMessage({ id: 'store.cart' })}</h3>
        </S.Cart>
        <S.List>
          {list.map(({ listShopping }) => {
            const { name } = listShopping;
            cont += 1;
            valueT = price * cont;

            return (
              <Flex justifyContent="space-between">
                <S.Item key={cont}>{name}</S.Item>
                <p>
                  {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </Flex>
            );
          })}
        </S.List>
        <S.Info>
          <Flex justifyContent="space-between">
            <p>{formatMessage({ id: 'store.total' })}</p>
            <p>
              <b>
                {valueT.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </b>
            </p>
          </Flex>
          <div>
            <Button
              disabled={valueT === 0}
              fullWidth
              onClick={() => setShow(!show)}
            >
              {formatMessage({ id: 'button.finalize' })}
            </Button>
          </div>
        </S.Info>
      </S.Card>

      {show && (
        <Modal
          showModal={(showModal) => setShow(showModal)}
          cashback={valueT * 0.05}
        />
      )}
    </>
  );
};

ShoppingCart.defaultProps = {
  list: [],
  price: 0,
};

ShoppingCart.propTypes = {
  list: PropTypes.array,
  price: PropTypes.number,
};
