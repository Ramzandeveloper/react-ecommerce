import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assests/shoppingCart.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapsStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapsStateToProps, mapDispatchToProps)(CartIcon);
