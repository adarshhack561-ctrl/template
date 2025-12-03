import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string; // Added name prop
  placeholder?: string; // Added placeholder prop
}

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange, className = '', name, placeholder }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label
        className="block text-sm font-medium mb-1"
        style={{ color: 'var(--text)' }} // Use CSS variable for label color
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 border rounded focus:outline-none"
      />
    </div>
  );
};

export default Input;
