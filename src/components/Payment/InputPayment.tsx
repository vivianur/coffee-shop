import { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputPaymentProps {
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  size?: number;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputPayment({
  placeholder,
  className,
  value,
  size,
  name,
  disabled,
  required,
  onChange,
}: InputPaymentProps) {
  return (
    <>
      <input
        className={twMerge('bg-base-button rounded-md p-3 w-full', className)}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={size}
        required={required}
      />
    </>
  );
}
