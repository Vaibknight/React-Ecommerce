const filterReducer = (state, action) => {
  if (action.type == "LOAD_FILTER_PRODUCTS") {
    return {
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
    };
  }

  if (action.type == "SET_GRIDVIEW") {
    return {
      ...state,
      grid_view: true,
    };
  }
};

export default filterReducer;
