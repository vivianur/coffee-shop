import { useContext } from 'react';
import { AddressContext } from '../contexts/AddressContext';

export function useAddressContext() {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error('teste');
  }
  return context;
}
