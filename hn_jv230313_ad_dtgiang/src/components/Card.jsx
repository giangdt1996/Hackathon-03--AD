import { useState } from "react";

function Card(props) {
  const { product, setProduct, cart, setCart } = props;

  const handleAdd = (e) => {
    const existingProduct = cart.find((item) => item.name === e.name);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.name === e.name ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newCart = {
        name: e.name,
        price: e.price,
        amount: 1,
        imageUrl: e.imageUrl,
      };
      setCart([...cart, newCart]);
    }
  };
  return (
    <div className="card">
      {product.map((e, i) => (
        <div className="product" key={i}>
          <div className="img">
            <img src={e.imageUrl} alt="" />
          </div>
          <div className="description">
            <p>{e.name}</p>
            <p>{e.heading}</p>
            <div className="count">
              <span>Price: {e.price}</span>
              <button className="add" onClick={() => handleAdd(e)}>
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
