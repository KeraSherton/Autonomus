import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
// import { ThemeContext } from "./components/context.js ";

function App(props) {
  const [name, setName] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Knife", active: false, price: 50 },
    { id: 2, name: "Sword", active: false, price: 10 },
    { id: 3, name: "Bow", active: false, price: 10 },
    { id: 4, name: "Arrow", active: false, price: 1 },
    { id: 5, name: "Food supply", active: false, price: 1 }
  ]);

  useEffect(() => {
    document.title = "Welcome " + name;
  });

  function handleChangeStatus(id) {
    const bought = items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    setItems(bought);
  }
  // let toPay = items.map(item => items.active === true);

  // let totalPrice = toPay.price.reduce();

  return (
    <div className="merchant-card">
      <img
        src="https://cdna.artstation.com/p/assets/images/images/008/790/826/large/simon-krieg-final-artst.jpg?1515345443"
        className="merchant"
        alt="some guy"
      />
      <h2>Hello adventurer!</h2>
      <input
        className="input"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <section>
        <Header items={items} />
        <ItemsList items={items} changeStatus={handleChangeStatus} />
      </section>
    </div>
  );
}

export default App;
