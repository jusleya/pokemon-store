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
  let count = 0;
  let valueT = 0;

  return (
    <>
      <S.Card>
        <S.Cart spaceBetween={8}>
          <IcCart />
          <h3>{formatMessage({ id: 'store.cart' })}</h3>
        </S.Cart>
        <S.List>
          {list?.map(({ listShopping }) => {
            const { id, img, name } = listShopping;
            count += 1;
            valueT = price * count;

            return (
              <S.ListIem justifyContent="space-between" key={id - count}>
                <Flex alignItems="center" spaceBetween={16}>
                  <S.Img src={img} />
                  <S.Item>{name}</S.Item>
                </Flex>
                <p>
                  {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </S.ListIem>
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

      {show && <Modal showModal={setShow} cashback={valueT * 0.05} />}
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
