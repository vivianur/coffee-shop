import { Trash } from 'phosphor-react';
import { useCartContext } from '../../hooks/useCartContext';
import { QuantityInput } from '../Menu/QuantityInput';

export function CoffeePaymentCard() {
  const { cart, updateQuantity, removeFromCart } = useCartContext();

  const handleQuantityChange = (coffeeName: string, newQuantity: number) => {
    updateQuantity(coffeeName, newQuantity);
  };

  function handleRemoveCoffee(coffeeName: string) {
    removeFromCart(coffeeName);
  }
  return (
    <div>
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 px-1 py-2 pb-6 mb-6  lg:w-96 border-b-[1px] border-b-base-button border-solid sm:flex-row sm:items-start sm:justify-between text-lg"
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-between ">
            <div>
              <img className="w-16 h-16" src={item.src} alt={item.coffeeName} />
            </div>

            <div className="flex items-center flex-col gap-3  ">
              <h1 className="text-base-subtitle ">{item.coffeeName}</h1>
              <div className="flex gap-2 ">
                <QuantityInput
                  value={item.quantity}
                  onChange={newQuantity =>
                    handleQuantityChange(item.coffeeName, newQuantity)
                  }
                />
                <button
                  onClick={() => handleRemoveCoffee(item.coffeeName)}
                  className="flex items-center gap-1 px-2 bg-base-button rounded-lg text-xs text-base-subtitle hover:bg-base-hover"
                >
                  <Trash className="text-purple-normal" size={15} />
                  REMOVER
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-base-text font-bold ">
              R$ {(9.9 * item.quantity).toFixed(2)}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
