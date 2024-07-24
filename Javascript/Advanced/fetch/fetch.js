// fetch => fetch ios an API => request data from server
// promise

// XMLHttpRequest

// fetch(url, [option]);
/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    // if (!res.ok) {
    //   throw new Error("Network response was not ok");
    // }
    // console.log(res);
    return res.json();
    // return res.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

//   ----------------------------------
/* 
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    // console.log(products);
    products.forEach((product) => {
      console.log(
        `Title: ${product.title}, Price:${product.price}, Category: ${product.category}`
      );
    });
  }); */

// -------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) => {
    // console.log(todos);

    const completedTodos = todos.filter((todo) => todo.completed);
    const notCompletedTodos = todos.filter((todo) => !todo.completed);
    // console.log(completedTodos);
    console.log(notCompletedTodos);
  })
  .catch((err) => {
    console.log(err);
  });
