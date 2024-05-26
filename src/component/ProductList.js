import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

import { useState } from "react";
import { Button } from "../styles/Button";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view == true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
  return <div></div>;
};

export default ProductList;
