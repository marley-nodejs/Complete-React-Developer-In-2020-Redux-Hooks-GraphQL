import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from 'redux/actions/cart.actions.js';

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';

import 'components/cart-icon/CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);