import { useContext } from 'react';
import { CoffeeContext } from '../contexts/CoffeesContext';

export function useCoffeeContext() {
  const context = useContext(CoffeeContext);
  if (context === null) {
    throw new Error(
      'useCoffeeContext tem que ser usado dentro do CoffeeProvider'
    );
  }

  return context;
}
