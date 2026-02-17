import React from 'react';

const Input = ({ label, type, placeholder, value, onChange, name, required = false }) => {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            {label && (
                <label
                    style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                    }}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="glass-input"
                style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontSize: '1rem',
                }}
            />
        </div>
    );
};

export default Input;
