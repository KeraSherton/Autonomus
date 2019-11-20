import React from "react";
import Item from "./Item";

const ItemsList = props => {
  const items = props.items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      changeStatus={props.changeStatus}
      price={item.price}
    />
  ));
  return (
    <div className="list">
      <ul>{items}</ul>
    </div>
  );
};

export default ItemsList;
