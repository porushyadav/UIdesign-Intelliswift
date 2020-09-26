import { FETCH_DATA, ADD_DATA, DELETE_DATA, LOADING } from "./actionTypes";

export function dataLoading() {
  return {
    type: LOADING,
  };
}
export function fetchData() {
  return (dispatch) => {
    dispatch(dataLoading);
    const id = JSON.parse(localStorage.getItem("id"));
    console.log("adfasd");
    console.log(id.username);
    const url = `http://jsonplaceholder.typicode.com/todos/?userId=${id.username}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateData(data));
      });
  };
}

export function updateData(products) {
  return {
    type: FETCH_DATA,
    products,
  };
}

export function deleteData(product) {
  return {
    type: DELETE_DATA,
    product,
  };
}

export function addData(product) {
  console.log(product);
  return {
    type: ADD_DATA,
    product,
  };
}
