import React from "react";
import "./Item.css";

const Item = props => {
  return (
    <li
      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.changeStatus(props.id)}
    >
      {props.name} price: {props.price} -stats-
    </li>
  );
};

export default Item;
