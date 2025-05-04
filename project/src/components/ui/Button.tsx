import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'left',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-forest-600 hover:bg-forest-700 text-white focus:ring-forest-500',
    secondary: 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400',
    outline: 'border border-forest-600 text-forest-600 hover:bg-forest-50 focus:ring-forest-500',
    ghost: 'text-forest-600 hover:bg-forest-50 focus:ring-forest-500',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default Button;