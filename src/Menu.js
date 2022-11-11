import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, category, price, img, desc } = menuItem;
        return (
          <article key={id}>
            <img src={img} alt={title} />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
