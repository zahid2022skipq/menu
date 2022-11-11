import React from "react";

const Categories = ({ filterMenuItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterMenuItems("all")}>
        All
      </button>
      <button
        className="filter-btn"
        onClick={() => filterMenuItems("breakfast")}
      >
        breakfast
      </button>
      <button className="filter-btn" onClick={() => filterMenuItems("lunch")}>
        lunch
      </button>
      <button className="filter-btn" onClick={() => filterMenuItems("shakes")}>
        shakes
      </button>
    </div>
  );
};

export default Categories;
