import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', variant = 'primary', size = 'md', disabled = false, style = {} }) => {

    const sizes = {
        sm: { padding: '8px 20px', fontSize: '0.875rem', borderRadius: '50px' },
        md: { padding: '12px 28px', fontSize: '1rem', borderRadius: '50px' },
        lg: { padding: '16px 40px', fontSize: '1.125rem', borderRadius: '50px' }
    };

    const getVariantStyle = () => {
        switch (variant) {
            case 'secondary':
                return {
                    background: 'white',
                    color: 'var(--text-main)',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                };
            case 'tertiary':
                return {
                    background: 'transparent',
                    color: 'var(--primary)',
                    border: '1px solid var(--primary)',
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
                    boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.2)',
                    border: 'none'
                };
            case 'primary':
            default:
                return {
                    background: 'var(--gradient-sunset)',
                    color: '#ffffff',
                    boxShadow: '0 10px 20px -5px rgba(244, 63, 94, 0.3)',
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
