import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
    className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] cursor-pointer';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 border border-transparent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md border border-transparent',
        outline: 'border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/50',
        ghost: 'text-gray-600 hover:text-primary hover:bg-gray-50'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
