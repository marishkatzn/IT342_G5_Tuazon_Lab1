import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', variant = 'primary', disabled = false }) => {
    const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg';

    const variants = {
        primary: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-indigo-500/30',
        secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm',
        danger: 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-red-500/30',
    };

    // Convert Tailwind-like classes to standard CSS using style objects or rely on index.css if not using Tailwind.
    // Since we are using standard CSS in index.css, I will apply inline styles or classes mapped to the global CSS.
    // For simplicity and "wow" factor, I'll use inline styles for the gradient and basic layout here, 
    // relying on the utility classes I defined in index.css

    const getVariantStyle = () => {
        switch (variant) {
            case 'secondary':
                return {
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#f8fafc',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                };
            case 'danger':
                return {
                    background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
                };
            case 'primary':
            default:
                return {
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                };
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                border: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                opacity: disabled ? 0.6 : 1,
                ...getVariantStyle(),
                ...((className && typeof className === 'object') ? className : {}) // Handle if className passed as object, though unlikely in standard usage
            }}
            className={`animate-hover ${className}`}
            onMouseEnter={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(0)')}
        >
            {children}
        </button>
    );
};

export default Button;
