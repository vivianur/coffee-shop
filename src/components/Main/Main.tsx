import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import coffeeBackground from '../../assets/coffee-bg.png';

export function Main() {
  return (
    <section className="bg-[url('./assets/background.png')] bg-cover">
      <main className="flex flex-col justify-between items-center p-4 sm:flex-row max-w-7xl mx-auto">
        <div className="flex flex-col mx-0">
          <h1 className="text-base-title text-5xl font-extrabold max-w-xl font-baloo2">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h3 className="text-base-subtitle text-xl font-roboto font-normal mt-4 max-w-xl  ">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <div className="flex flex-row flex-wrap  text-base-subtitle gap-6 text-lg mt-7 lg:mt-[4.1rem] xl:flex-nowrap">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-3">
                <ShoppingCart
                  className="text-white bg-yellow-dark rounded-full p-2 h-8 w-8"
                  size={22}
                  weight="fill"
                />
                Compra simples e segura
              </span>
              <span className="flex items-center gap-3">
                <Timer
                  className="text-white bg-yellow-normal rounded-full p-2 h-8 w-8"
                  size={22}
                  weight="fill"
                />
                Entrega rápida e rastreada
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-3">
                <Package
                  className="text-white bg-base-text rounded-full p-2 h-8 w-8"
                  size={22}
                  weight="fill"
                />
                Embalagem mantém o café intacto
              </span>
              <span className="flex items-center gap-3">
                <Coffee
                  className="text-white bg-purple-normal rounded-full p-2 h-8 w-8"
                  size={22}
                  weight="fill"
                />
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <img src={coffeeBackground} alt="Coffee" />
        </div>
      </main>
    </section>
  );
}
