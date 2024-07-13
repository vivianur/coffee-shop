import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonPaymentProps {
  icon: ReactNode;
  value: string;
  className?: string;
  onClick: () => void;
}

export function ButtonPayment({
  icon,
  value,
  className,
  onClick,
}: ButtonPaymentProps) {
  return (
    <button
      className={twMerge(
        'flex gap-3 font-roboto items-center text-base-text text-xs rounded-lg p-4 lg:w-[230.67px] mb-4 w-full hover:bg-base-hover ',
        className
      )}
      type="button"
      onClick={onClick}
    >
      <span className="text-purple-normal">{icon}</span>
      {value}
    </button>
  );
}
