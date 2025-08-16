"use client";

interface ButtonProps {
  buttonText: string;
  onClickHandler: () => void;
}

const Button = ({ buttonText, onClickHandler }: ButtonProps) => {
  return (
    <button
      className=" ml-20 px-8 font-poppins py-2 border-cm rounded-sm cursor-pointer bg-pink-700  text-white hover:bg-gray-600 transition-colors"
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
};

export default Button;