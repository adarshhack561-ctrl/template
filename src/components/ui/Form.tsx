import React from "react";

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, className = "" }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`p-4 rounded-lg shadow-md ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;
