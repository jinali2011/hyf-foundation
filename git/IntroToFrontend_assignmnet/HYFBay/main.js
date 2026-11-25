console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const productList = document.querySelector("#ProductList");
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const newProduct = document.createElement("li");
    const title = document.createElement("h1");
    const price = document.createElement("p");
    const rating = document.createElement("p");

    title.innerHTML = product.name;
    price.innerHTML = "Price : " + String(product.price);
    rating.innerHTML = "Rating : " + String(product.rating);

    newProduct.append(title, price, rating);
    productList.appendChild(newProduct);
  }
}

renderProducts(products);
