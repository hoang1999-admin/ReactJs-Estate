import {
    FETCH_PRODUCTS,
  } from "../ActionCart/Type";
  
  export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8080/api/v1/products")
      .then((res) => res.json())
      .catch((err) =>
        fetch("db.json")
          .then((res) => res.json())
          .then((data) => data.products)
      )
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS, payload: data });
      });
  };
  