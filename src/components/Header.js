import React from "react";

const Header = props => {
  const activeItems = props.items.filter(item => item.active);

  let sum = activeItems
    .map(function(obj) {
      return obj.price;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0);

  console.log(activeItems);

  return (
    <header>
      <p>You bought: {activeItems.length} items!</p>
      <p>Give me: {sum} </p>
    </header>
  );
};

export default Header;
