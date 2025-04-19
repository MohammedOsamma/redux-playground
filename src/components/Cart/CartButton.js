import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActoins } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActoins.toggle());
  };
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
