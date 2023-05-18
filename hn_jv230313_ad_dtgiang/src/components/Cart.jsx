import React from "react";
import swal from "sweetalert";

function Cart(props) {
  const { cart, setCart } = props;
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );

  const handlePlus = (i) => {
    const updatedCart = [...cart];
    updatedCart[i].amount += 1;
    setCart(updatedCart);
  };

  const handleMinus = (i) => {
    const updatedCart = [...cart];

    if (updatedCart[i].amount > 0) {
      updatedCart[i].amount -= 1;
      setCart(updatedCart);
    }
  };
  const handleClearAll = () => {
    setCart([]);
  };
  const handlePay = () => {
    totalPrice === 0
      ? swal({
          title: "error",
          text: "Please choose products first!!",
          type: "error",
          confirmButtonText: "Cool",
        })
      : swal({
          title: "Success",
          text: "Thanks for Payment",
          type: "success",
          confirmButtonText: "Cool",
        });
    setCart([]);
  };
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.map((e, i) =>
        e.amount !== 0 ? (
          <div>
            <div key={i} className="cart-show">
              <img src={e.imageUrl} alt="" />
              <div className="infoProduct">{e.name}</div>
              <div className="infoProduct">
                <button onClick={() => handleMinus(i)}>-</button>
                <span>{e.amount}</span>

                <button onClick={() => handlePlus(i)}>+</button>
              </div>
              <div className="infoProduct">${e.price * e.amount}</div>
            </div>
            <hr />
          </div>
        ) : null
      )}
      <h3>Total Cart: ${totalPrice}</h3>
      <button className="btn" onClick={handlePay}>
        Pay
      </button>
      <button className="btn" onClick={handleClearAll}>
        ClearAll
      </button>
    </div>
  );
}

export default Cart;
