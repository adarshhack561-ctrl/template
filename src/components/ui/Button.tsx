import React from 'react';

interface ButtonProps {
  label?: string; // Added label prop
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary'; // Added variant prop
  color?: {
    background: string;
    text: string;
  }; // Added color prop for customization
  children?: React.ReactNode; // Made children optional
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  onClick,
  className = '',
  variant,
  color,
  children,
}) => {
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600 text-white'
      : variant === 'secondary'
      ? 'bg-gray-500 hover:bg-gray-600 text-white'
      : '';

  const customStyles = color
    ? {
        backgroundColor: color.background,
        color: color.text,
      }
    : {};

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded ${variantClasses} ${className}`}
      style={customStyles} // Apply custom styles if provided
    >
      {label || children}
    </button>
  );
};

export default Button;
