interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function QuantityInput({ value, onChange }: QuantityInputProps) {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 font-roboto bg-base-button py-1 rounded-lg w-[65px]">
      <button
        type="button"
        className="text-purple-normal font-extrabold "
        onClick={decrement}
      >
        -
      </button>
      <span>{value}</span>
      <button
        type="button"
        className="text-purple-normal font-extrabold "
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
