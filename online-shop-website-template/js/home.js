
const addSingleProductToCart = (product) => {
  JSON.stringify(product);
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
};