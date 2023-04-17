import { createContext, useState, ReactNode } from "react";
import { products } from "../assets/data";

interface ContextProps {
  children: ReactNode;
}

interface CartItems {
  [itemId: number]: number;
}

export interface contextProps {
  cartItems: CartItems;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getlen: () => number;
}

export const ShopContext = createContext<contextProps | null>(null);

export const allItems = products
  .map((product) => product.items)
  .reduce((acc, items) => acc.concat(items), []);

const getDefaultCart = (): CartItems => {
  let cart: CartItems = {};
  for (let i = 1; i < allItems.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }: ContextProps) => {
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart);

  const getlen = () => {
    let len = 0;
    for (const item in cartItems) {
      len += cartItems[item];
    }
    return len;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allItems.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number) =>
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

  const removeFromCart = (itemId: number) =>
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getlen,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
