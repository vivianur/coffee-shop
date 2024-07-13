import { ReactNode, createContext, useState } from 'react';

interface CoffeesProps {
  totalPrice: number;
  totalItems: number;
  handlePriceChange: (price: number) => void;
  handleQuantityItems: (quantity: number) => void;
}

export const CoffeeContext = createContext<CoffeesProps | null>(null);

export function CoffeeProvider({ children }: { children: ReactNode }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  function handlePriceChange(price: number) {
    const newTotalPrice = totalPrice + price;
    setTotalPrice(newTotalPrice);
  }

  function handleQuantityItems(quantity: number) {
    const totalItemsUpdate = totalItems + quantity;
    setTotalItems(totalItemsUpdate);
    console.log(totalItemsUpdate);
  }
  return (
    <CoffeeContext.Provider
      value={{ totalPrice, totalItems, handlePriceChange, handleQuantityItems }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
