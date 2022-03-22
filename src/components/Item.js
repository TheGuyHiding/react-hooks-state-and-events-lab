import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);

  function itemHandle(){
    setCart(inCart => !inCart);
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {inCart ? "remove" : "add"} onClick={itemHandle}>{inCart ? "remove from " : "add to "}cart</button>
    </li>
  );
}

export default Item;
