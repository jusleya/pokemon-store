import React from 'react';
import PropTypes from 'prop-types';

export const ShoppingCart = ({ name }) => {
  console.log(name);
  return <div>card</div>;
};

ShoppingCart.defaultProps = {
  name: [],
};

ShoppingCart.propTypes = {
  name: PropTypes.array,
};
