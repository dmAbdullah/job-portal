import { getShoppingCart } from "./fakeDb";

const customLoader = async () => {
  const loadProducts = await fetch("/jobs.json");
  const loadCartProduct = await loadProducts.json();

  const cartProduct = getShoppingCart();
  const cartList = [];
  for (const id in cartProduct) {
    const addedCart = loadCartProduct.find((cart) => cart.Job_Id == id);
    if (addedCart) {
      const quantity = cartProduct[id];
      addedCart.quantity = quantity;
      cartList.push(addedCart);
    }
  }
  return cartList;
};
export default customLoader;
