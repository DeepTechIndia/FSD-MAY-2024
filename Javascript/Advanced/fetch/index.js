document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => displayProducts(products))
    .catch((error) => console.log(error));
});

function displayProducts(products) {
  const productContainer = document.getElementById("products");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <div class="product-details">
    <div class="product-title"> ${product.title}</div>
    <div class="product-price"> ${product.price}</div>
    <div class="product-description"> ${product.description}</div>
    </div>
    `;

    productContainer.appendChild(productDiv);
  });
}
