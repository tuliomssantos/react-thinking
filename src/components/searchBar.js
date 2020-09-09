import React from "react";

const searchBar = ({ onFilterTextChange, onInStockChange, filterText, inStockOnly }) => {
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e) => {
    onInStockChange(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

export default searchBar;
