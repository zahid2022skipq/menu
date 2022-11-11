import React from "react";

const Categories = ({ categories, filterMenuItems }) => {
  return (
    <div className="btn-container">
      {categories.map((cat) => (
        <button
          key={cat}
          className="filter-btn"
          onClick={() => filterMenuItems(`${cat}`)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
