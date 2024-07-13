import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import pilotMan from '../assets/pilotman.png';
import { useAddressContext } from '../hooks/useAddressContext';

export function Success() {
  const { addressData } = useAddressContext();
  return (
    <main className="flex flex-col max-w-7xl p-4 mx-auto items-center mt-10 gap-14 md:flex-row lg:gap-28 lg:mt-20">
      <div>
        <h1 className="font-baloo2 font-extrabold text-[25px] text-yellow-dark">
          Uhu! Pedido confirmado
        </h1>

        <p className="text-base-subtitle text-xl font-roboto">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="flex flex-col items-center justify-center md:items-baseline  gap-4 max-w-[540px] rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] border-solid border-2 border-purple-normal mt-10 p-5 lg:p-10 font-roboto text-base-text">
          {' '}
          <div className="flex flex-col justify-center items-center gap-3 md:flex-row ">
            <div>
              <MapPin
                className="text-white bg-purple-normal rounded-full p-2 h-8 w-8"
                weight="fill"
                size={22}
              />
            </div>
            <p className="max-w-[11rem] md:max-w-md">
              Entrega em{' '}
              <span className="font-bold">{addressData.logradouro}, 181 </span>
              {addressData.bairro} - {addressData.localidade} - {addressData.uf}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <Timer
              size={22}
              className="text-white bg-yellow-normal rounded-full p-2 h-8 w-8"
              weight="fill"
            />
            <span>
              <p>Previsão de entrega</p>
              <p className="font-bold">20 - 30 min</p>
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <CurrencyDollar className=" text-white bg-yellow-dark rounded-full p-2 h-8 w-8" />
            <span>
              <p>Pagamento na entrega</p>
              <p className="font-bold">Cartão de Crédito</p>
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={pilotMan} alt="" />
      </div>
    </main>
  );
}
