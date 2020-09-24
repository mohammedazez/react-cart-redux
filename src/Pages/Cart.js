import React from "react";
// Import action
import { handlePlus, handleMinus } from "../Redux/action/cart.action";
// Import hooks redux
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const selector = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Ini halaman Cart</h1>
      <button
        onClick={() => {
          dispatch(handlePlus());
        }}
      >
        +
      </button>
      <h1>{selector}</h1>
      <button
        onClick={() => {
          dispatch(handleMinus());
        }}
      >
        -
      </button>
    </div>
  );
}

export default Cart;
