import React from "react";

const Categories = ({ categories, setCategory }) => {
  const handleClick = (category) => {
    setCategory(category);
  };
  return (
    <div className="categories">
      <button onClick={(category) => handleClick(category)}>
        {categories}
      </button>
    </div>
  );
};

export default Categories;
