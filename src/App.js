import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategoris] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
