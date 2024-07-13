import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { ButtonPayment } from './ButtonPayment';
import cafeTriste from '../../assets/cafe-tristonho.png';
import { InputPayment } from './InputPayment';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CoffeePaymentCard } from './CoffeePaymentCard';
import { useCartContext } from '../../hooks/useCartContext';
import { useNavigate } from 'react-router-dom';
import { useAddressContext } from '../../hooks/useAddressContext';

export function Payment() {
  const {
    addressData,
    isAddressFetched,
    setAddressData,
    setIsAddressFetched,
    setNumberAddress,
  } = useAddressContext();
  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showRedBorder, setShowRedBorder] = useState(false);

  function handleNewCep(event: ChangeEvent<HTMLInputElement>) {
    const newCep = event.target.value;
    setAddressData({
      ...addressData,
      cep: newCep,
    });

    setIsAddressFetched(false);
  }

  function handleValueInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === 'numero') {
      setNumberAddress(value);
    } else {
      setAddressData({
        ...addressData,
        [name]: value,
      });
    }
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { cep, logradouro, bairro, localidade, uf } = addressData;
    if (
      cep &&
      logradouro &&
      bairro &&
      localidade &&
      uf &&
      selectedPaymentMethod
    ) {
      console.log('teste ');
      clearCart();

      navigate('/success');
    } else {
      setShowRedBorder(true);
      setTimeout(() => setShowRedBorder(false), 3000);
    }
  }

  function handlePaymentMethodSelect(method: string) {
    setSelectedPaymentMethod(method);
    setShowRedBorder(false);
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <main className="flex flex-col items-center xl:items-start max-w-7xl mx-auto p-4 gap-8 xl:flex-row">
        <section className="flex flex-col items-center xl:items-start xl:justify-center gap-3 ">
          <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
            Complete seu pedido
          </h1>

          <div className="flex flex-col bg-base-card rounded-lg gap-8 text-sm p-2 sm:p-10 w-full">
            <div>
              <h1 className="flex flex-row gap-2 text-base-subtitle text-base font-roboto font-medium">
                <MapPinLine className="text-yellow-dark" size={24} /> Endereço
                de entrega
              </h1>
              <p className="font-roboto text-base-text text-sm pl-8">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <InputPayment
                onChange={handleNewCep}
                value={addressData.cep}
                placeholder="CEP"
                className="lg:w-[200px]"
                size={8}
                required
              />
              <InputPayment
                onChange={handleValueInput}
                name="logradouro"
                value={addressData.logradouro}
                disabled={isAddressFetched}
                placeholder="Rua"
                className={isAddressFetched ? 'cursor-not-allowed' : ''}
                required
              />
              <div className="flex flex-col gap-4 md:flex-row">
                <InputPayment
                  name="numero"
                  placeholder="Número"
                  className="lg:w-[200px]"
                  onChange={handleValueInput}
                  required
                />
                <span className="relative w-full">
                  <InputPayment placeholder="Complemento" />
                  <p className="absolute top-3 right-3 text-base-label font-roboto italic bg-base-button px-2">
                    Opcional
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-4 md:flex-row ">
                <InputPayment
                  name="bairro"
                  onChange={handleValueInput}
                  value={addressData.bairro}
                  placeholder="Bairro"
                  disabled={isAddressFetched}
                  className={
                    isAddressFetched
                      ? 'cursor-not-allowed lg:w-[200px]'
                      : 'lg:w-[200px]'
                  }
                  required
                />
                <InputPayment
                  name="localidade"
                  onChange={handleValueInput}
                  placeholder="Cidade"
                  value={addressData.localidade}
                  disabled={isAddressFetched}
                  className={isAddressFetched ? 'cursor-not-allowed' : ''}
                  required
                />
                <InputPayment
                  name="uf"
                  onChange={handleValueInput}
                  value={addressData.uf}
                  placeholder="UF"
                  disabled={isAddressFetched}
                  size={2}
                  className={
                    isAddressFetched
                      ? 'cursor-not-allowed lg:w-[60px]'
                      : 'lg:w-[60px]'
                  }
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 p-2 sm:p-10 max-h-[372px] bg-base-card rounded-lg w-full">
            <div>
              <h1 className="flex flex-row gap-2 items-center text-base-subtitle font-roboto font-medium ">
                <CurrencyDollar className="text-purple-normal" size={24} />
                Pagamento
              </h1>

              <p className="font-roboto text-base-text text-sm pl-8">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row items-center text-sm sm:text-base">
              <ButtonPayment
                className={`${
                  selectedPaymentMethod === 'CARTÃO DE CRÉDITO'
                    ? 'bg-purple-light border-2 border-purple-normal'
                    : 'bg-base-button border-2 border-transparent'
                } ${
                  showRedBorder && !selectedPaymentMethod
                    ? 'border-red-500'
                    : ''
                }`}
                icon={<CreditCard size={22} />}
                value="CARTÃO DE CRÉDITO"
                onClick={() => handlePaymentMethodSelect('CARTÃO DE CRÉDITO')}
              />

              <ButtonPayment
                icon={<Bank size={22} />}
                value="CARTÃO DE DÉBITO"
                onClick={() => handlePaymentMethodSelect('CARTÃO DE DÉBITO')}
                className={`${
                  selectedPaymentMethod === 'CARTÃO DE DÉBITO'
                    ? 'bg-purple-light border-2 border-purple-normal'
                    : 'bg-base-button border-2 border-transparent'
                } ${
                  showRedBorder && !selectedPaymentMethod
                    ? 'border-red-500'
                    : ''
                }`}
              />
              <ButtonPayment
                icon={<Money size={22} />}
                value="DINHEIRO"
                onClick={() => handlePaymentMethodSelect('DINHEIRO')}
                className={`${
                  selectedPaymentMethod === 'DINHEIRO'
                    ? 'bg-purple-light border-2 border-purple-normal'
                    : 'bg-base-button border-2 border-transparent'
                } ${
                  showRedBorder && !selectedPaymentMethod
                    ? 'border-red-500'
                    : ''
                }`}
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mt-3 lg:items-start">
          <h1 className="font-baloo2 font-extrabold text-2xl mb-4">
            Cafés selecionados
          </h1>

          {cart.length !== 0 ? (
            <div className="flex flex-col h-auto items-center gap-4 bg-base-card p-10 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] font-roboto text-lg ">
              <div>
                <CoffeePaymentCard />
              </div>
              <div className="flex flex-col gap-3 w-full  font-roboto text-base-text md:justify-between">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between ">
                  <p className="text-sm">Total de Itens</p>
                  <span className="text-base">
                    R${' '}
                    {cart
                      .reduce((total, item) => total + 9.9 * item.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col items-center sm:flex-row sm:justify-between ">
                  <p className="text-sm">Entrega</p>
                  <p className="text-green-500 text-base">Grátis</p>
                </div>
                <div className="flex flex-col items-center sm:flex-row sm:justify-between font-bold text-base-subtitle text-xl ">
                  <p>Total</p>
                  <span>
                    R${' '}
                    {cart
                      .reduce((total, item) => total + 9.9 * item.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                className="bg-yellow-normal text-white font-bold px-2 py-3 sm:w-96 rounded-md hover:bg-yellow-dark"
                type="submit"
              >
                CONFIRMAR PEDIDO
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 bg-base-card p-10 rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px] font-baloo2 font-bold text-sm md:text-lg ">
              <img className="w-56" src={cafeTriste} alt="" />
              <h1 className="font-baloo2">
                Você ainda não adicionou nenhum café no seu carrinho! :(
              </h1>
              <h1>
                <NavLink to="/" className="text-purple-normal font-extrabold">
                  Clique aqui
                </NavLink>{' '}
                para escolher algum cafézinho do nosso cardápio! :D
              </h1>
            </div>
          )}
        </section>
      </main>
    </form>
  );
}
