import React, { useState } from "react";
import ProductTable from "./productTable";
import SearchBar from './searchBar'

const FilterableProductTable = () => {
  const [
    filterableProductTableState,
    setFilterableProductTableState,
  ] = useState({
    filterText: "",
    inStockOnly: false,
  });

  const handleFilterTextChange = (filterText) => {
    setFilterableProductTableState({
      ...filterableProductTableState,
      filterText: filterText,
    });
  };

  const handleInStockChange = (inStockOnly) => {
    setFilterableProductTableState({
      ...filterableProductTableState,
      inStockOnly: inStockOnly,
    });
  };

  return (
    <div>
      <SearchBar
        filterText={filterableProductTableState.filterText}
        inStockOnly={filterableProductTableState.inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterableProductTableState.filterText}
        inStockOnly={filterableProductTableState.inStockOnly}
      />
    </div>
  );
};

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

export default FilterableProductTable;
