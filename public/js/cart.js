// Creamos una variable para almacenar el carrito en localStorage
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
const cartBotton = document.getElementsByClassName(".cartBotton");
cartBotton.addEventListener(
  "click",
  addToCart(producto.target.getAttribute("dataId"))
);
// Si el carrito no existe en localStorage, lo creamos como un array vacío
if (!shoppingCart) {
  shoppingCart = [];
}
// Función para añadir productos al carrito

function addToCart(product) {
  console.log(product);
  // Comprobamos si el producto ya se encuentra en el carrito
  const existingProductIndex = shoppingCart.findIndex(
    (p) => p.id === product.id
  );
  if (existingProductIndex >= 0) {
    // Si ya está en el carrito, solo aumentamos la cantidad
    shoppingCart[existingProductIndex].quantity += 1;
  } else {
    // Si no está en el carrito, lo añadimos como un nuevo producto
    shoppingCart.push({
      ...product,
      quantity: 1,
    });
  }
  // Actualizamos el carrito en localStorage
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}
// Función para eliminar productos del carrito
function removeFromCart(productId) {
  // Encontramos el índice del producto en el carrito
  const existingProductIndex = shoppingCart.findIndex(
    (p) => p.id === productId
  );
  // Si se encuentra el producto, lo eliminamos del carrito
  if (existingProductIndex >= 0) {
    shoppingCart.splice(existingProductIndex, 1);
    // Actualizamos el carrito en localStorage
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }
}
