const filterReducer = (state, action) => {
  if (action.type == "LOAD_FILTER_PRODUCTS") {
    return {
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
    };
  }

  if (action.type == "SET_GRID_VIEW") {
    return {
      ...state,
      grid_view: true,
    };
  }

  if (action.type == "SET_LIST_VIEW") {
    return {
      ...state,
      grid_view: false,
    };
  }

  if (action.type == "GET_SORT_VALUE") {
    // let userSortValue = document.getElementById("sort");

    // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

    return {
      ...state,
      sorting_value: action.payload,
    };
  }

  if (action.type == "SORTING_PRODUCTS") {
    let newSortData;
    let tempSortProduct = [...action.payload];

    if (state.sorting_value === "lowest") {
      const sortingProducts = (a, b) => {
        return a.price - b.price;
      };

      newSortData = tempSortProduct.sort(sortingProducts);
    }

    if (state.sorting_value === "highest") {
      const sortingProducts = (a, b) => {
        return b.price - a.price;
      };

      newSortData = tempSortProduct.sort(sortingProducts);
    }

    if (state.sorting_value === "a-z") {
      newSortData = tempSortProduct.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }

    if (state.sorting_value === "z-a") {
      newSortData = tempSortProduct.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }

    return {
      ...state,
      filter_products: newSortData,
    };
  }
};

export default filterReducer;
