import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hideLabel?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, value, onChange, hideLabel = false, required = false, ...attributes }) => {
  return (
    <div className="my-4">
      <label
        htmlFor={id}
        className={`block text-gray-700 font-bold mb-2 ${
          hideLabel ? "sr-only" : ""
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...attributes}
      />
    </div>
  );
};

export default Input;
