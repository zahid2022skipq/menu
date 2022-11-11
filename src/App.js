import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategoris] = useState([]);

  const filterMenuItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterMenuItems={filterMenuItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
