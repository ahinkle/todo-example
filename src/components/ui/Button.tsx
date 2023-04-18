import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    //
}

const Button: React.FC<ButtonProps> = ({
  children,
  ...attributes
}) => {
  return (
    <button
      className='bg-indigo-600 text-base uppercase px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full'
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
