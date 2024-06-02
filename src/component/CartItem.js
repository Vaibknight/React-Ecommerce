import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, name, image, price, amount }) => {
  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // amount > 0 ? setAmount(amount - 1) : setAmount(0);
  };

  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(0);
    // setAmount(amount + 1);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>

        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
          </div>
        </div>
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <div>
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
