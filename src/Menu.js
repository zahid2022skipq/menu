import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, category, price, img, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div>
              <header>{title}</header>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
