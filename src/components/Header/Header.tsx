/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin, ShoppingCart } from 'phosphor-react';
import coffeelogo from '../../assets/logo-coffee.png';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../hooks/useCartContext';

export function Header() {
  const [city, setCity] = useState('');
  const { cart } = useCartContext();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBre0xp45CXu5ycVVZdNEL4TZAIhE4PhTE`
          );

          const data = await response.json();
          const cityAndState = data.results

            .map((result: any) => {
              const cityComponent = result.address_components.find(
                (component: any) =>
                  component.types.includes('administrative_area_level_2')
              )?.long_name;

              const stateComponent = result.address_components.find(
                (component: any) =>
                  component.types.includes('administrative_area_level_1')
              )?.short_name;

              return `${cityComponent}, ${stateComponent}`;
            })
            .find((city: string) => city);
          setCity(cityAndState || 'Cidade desconhecida');
        } catch (error) {
          setCity('Cidade Desconhecida');
        }
      });
    } else {
      alert('Não foi possível pegar sua localização');
    }
  }, []);

  return (
    <header>
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto p-4 gap-3 sm:flex-row sm:justify-between ">
        <NavLink to="/">
          <div>
            <img src={coffeelogo} alt="Logo Coffee Delivery" />
          </div>
        </NavLink>

        <div className="flex flex-col gap-3 sm:flex-row ">
          <div className="flex items-center p-2 gap-1 bg-purple-light text-purple-dark rounded-md cursor-pointer hover:bg-purple-normal hover:text-purple-light">
            <MapPin size={22} weight="fill" />
            {city && <span>{city}</span>}
          </div>
          <NavLink className="relative" to="/cart">
            <ShoppingCart
              className="bg-yellow-light h-[2.375rem] w-full p-2 text-yellow-dark hover:text-yellow-light hover:bg-yellow-dark  rounded-md cursor-pointer "
              size={25}
              weight="fill"
            />
            <div className="absolute -top-3 -right-3 bg-yellow-dark rounded-full px-2 py-[3px] text-white font-bold text-sm ">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
