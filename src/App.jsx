import React from "react";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizaza Margherit",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const Pizzas = pizzaData;
  //const Pizzas = [];
  const numPizzas = Pizzas.length;
  console.log(numPizzas);
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. all from our stone oven, all orgamic, all delicious.
          </p>

          <ul className="pizzas">
            {Pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> We're still working on our Menu, please come back later :) </p>
      )}

      {/*
      <Pizza
        name="Pizaza Margherit"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
      />*/}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null; // elpizza el sold out htb2a b true fhtrg3 b null y3ne lw sold out ht5tfe
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? (
          <span>soldOut</span>
        ) : (
          <span>{pizzaObj.price + "$"}</span>
        )} nafs el ta7t bs el ta7t 27sn */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "$"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openhour = 12;
  const closehour = 24;
  const isOpen = hour >= openhour && hour <= closehour;
  // console.log(isOpen);
  //if (hour >= openhour && hour <= closehour) alert("we're currently open");
  //else alert("Sorry we're closed");
  /*
  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between {openhour}:00 and {closehour}:00
      </p>
    );
    */

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closehour} openhour={openhour} />
      ) : (
        <p>
          We're happy to welcome you between {openhour}:00 and {closehour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closehour, openhour }) {
  return (
    <div className="order">
      <p>
        We're open from {openhour}:00. to {closehour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
