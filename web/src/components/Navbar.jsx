import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Button from './Button';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        setIsPopupOpen(false);
        navigate('/login');
    };

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '1rem 0'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to={user ? "/dashboard" : "/"} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--primary)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: 'white',
                        boxShadow: '0 4px 10px rgba(244, 63, 94, 0.2)'
                    }}>
                        M
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
                        MoneyMap
                    </span>
                </Link>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {user ? (
                        <div style={{ position: 'relative' }} ref={popupRef}>
                            <div
                                onClick={() => setIsPopupOpen(!isPopupOpen)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    cursor: 'pointer',
                                    padding: '4px 12px',
                                    borderRadius: '16px',
                                    background: isPopupOpen ? 'rgba(0,0,0,0.05)' : 'transparent',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <span style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>
                                    Hi, <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{user.name}</span>
                                </span>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    background: 'var(--gradient-warm)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    boxShadow: '0 4px 12px rgba(244, 63, 94, 0.2)'
                                }}>
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            </div>

                            {isPopupOpen && (
                                <div className="glass-panel" style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 12px)',
                                    right: 0,
                                    width: '280px',
                                    padding: '1.5rem',
                                    borderRadius: '24px',
                                    zIndex: 100,
                                    animation: 'fadeIn 0.2s ease-out',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            background: 'var(--gradient-warm)',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '28px',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            margin: '0 auto 12px',
                                            boxShadow: '0 8px 16px rgba(244, 63, 94, 0.2)'
                                        }}>
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>{user.name}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{user.email || 'Member'}</p>
                                    </div>

                                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: '1rem' }}>
                                        <Button
                                            variant="secondary"
                                            onClick={handleLogout}
                                            size="sm"
                                            style={{ width: '100%', justifyContent: 'center', background: '#fee2e2', color: '#ef4444', border: 'none' }}
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button variant="primary" size="md">
                                    Login
                                </Button>
                            </Link>

                            <Link to="/register">
                                <Button variant="tertiary" size="md">
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
