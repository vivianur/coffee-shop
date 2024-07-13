import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CoffeeProvider } from './contexts/CoffeesContext';
import { CartProvider } from './contexts/CartContext';
import { AddressProvider } from './contexts/AddressContext';
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <>
      <ToastContainer
        theme="colored"
        position="bottom-right"
        autoClose={3000}
      />
      <BrowserRouter>
        <AddressProvider>
          <CartProvider>
            <CoffeeProvider>
              <Router />
            </CoffeeProvider>
          </CartProvider>
        </AddressProvider>
      </BrowserRouter>
    </>
  );
}
