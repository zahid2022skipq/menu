import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");

  return (
    <main>
      <div className="container">
        {items.map((cat) => (
          <Categories
            key={cat.id}
            categories={cat.category}
            setCategory={setCategory}
          />
        ))}
      </div>
      {category === "" ? (
        <div>
          {items.map((m) => (
            <Menu title={m.title} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
}

export default App;
