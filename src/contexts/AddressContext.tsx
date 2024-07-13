import { createContext, ReactNode, useEffect, useState } from 'react';

interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface AddressContextType {
  addressData: AddressData;
  numberAddress: string;
  isAddressFetched: boolean;
  setNumberAddress: (number: string) => void;
  setAddressData: (data: AddressData) => void;
  setIsAddressFetched: (value: boolean) => void;
}

export const AddressContext = createContext<AddressContextType | null>(null);

export function AddressProvider({ children }: { children: ReactNode }) {
  const [addressData, setAddressData] = useState<AddressData>({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });
  const [isAddressFetched, setIsAddressFetched] = useState(false);
  const [numberAddress, setNumberAddress] = useState('');

  useEffect(() => {
    async function fetchAddressData() {
      if (addressData.cep.length === 8) {
        try {
          const response = await fetch(
            `https://viacep.com.br/ws/${addressData.cep}/json/`
          );
          const data = await response.json();
          setAddressData(prevData => ({
            ...prevData,
            logradouro: data.logradouro || '',
            complemento: data.complemento || '',
            bairro: data.bairro || '',
            localidade: data.localidade || '',
            uf: data.uf || '',
          }));
          setIsAddressFetched(true);
        } catch (error) {
          console.error('Error fetching address data:', error);
        }
      } else {
        setAddressData({
          cep: addressData.cep,
          logradouro: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
        });
        setIsAddressFetched(false);
      }
    }
    fetchAddressData();
  }, [addressData.cep]);
  return (
    <AddressContext.Provider
      value={{
        addressData,
        numberAddress,
        isAddressFetched,
        setIsAddressFetched,
        setAddressData,
        setNumberAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
