import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', variant = 'primary', size = 'md', disabled = false, style = {} }) => {

    const sizes = {
        sm: { padding: '8px 16px', fontSize: '0.875rem', borderRadius: '8px' },
        md: { padding: '12px 24px', fontSize: '1rem', borderRadius: '12px' },
        lg: { padding: '16px 32px', fontSize: '1.125rem', borderRadius: '16px' }
    };

    const getVariantStyle = () => {
        switch (variant) {
            case 'secondary':
                return {
                    background: 'transparent',
                    color: 'var(--primary)',
                    border: '1px solid var(--primary)',
                    boxShadow: 'none'
                };
            case 'tertiary':
                return {
                    background: 'transparent',
                    color: 'white',
                    border: '1px solid white',
                    boxShadow: 'none'
                };
            case 'ghost':
                return {
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    border: '1px solid transparent',
                    boxShadow: 'none'
                };
            case 'danger':
                return {
                    background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
                    border: 'none'
                };
            case 'primary':
            default:
                return {
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                    border: 'none'
                };
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                fontWeight: '600',
                cursor: disabled ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                opacity: disabled ? 0.6 : 1,
                ...sizes[size],
                ...getVariantStyle(),
                ...style, // Allow usage of passed style prop to override if absolutely necessary, but prioritize component props
                ...((className && typeof className === 'object') ? className : {})
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
