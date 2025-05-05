import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-md transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-[#E23744] text-white hover:bg-[#c22f3a] active:bg-[#a3282f]',
    secondary: 'bg-[#333] text-white hover:bg-[#444] active:bg-[#222]',
    outline: 'bg-transparent border border-[#E23744] text-[#E23744] hover:bg-[#fef0f1] active:bg-[#fde1e3]',
  };
  
  const sizeClasses = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;