import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return <main></main>;
}

export default App;
