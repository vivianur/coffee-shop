import { ReactNode, createContext, useState } from 'react';

interface CartItem {
  src: string;
  types: string[];
  coffeeName: string;
  description: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  value: number;
  setValue: (value: number) => void;
  addToCart: (coffee: CartItem) => void;
  updateQuantity: (coffeeName: string, quantity: number) => void;
  removeFromCart: (coffeeName: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [value, setValue] = useState(1);

  function addToCart(coffee: CartItem) {
    setCart(prevCart => [...prevCart, coffee]);
  }

  function updateQuantity(coffeeName: string, quantity: number) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.coffeeName === coffeeName ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(coffeeName: string) {
    setCart(prevCart => prevCart.filter(item => item.coffeeName != coffeeName));
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        value,
        setValue,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
