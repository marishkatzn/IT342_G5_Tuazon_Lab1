import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Button from './Button';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
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
                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'default' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            background: 'var(--primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            M
                        </div>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
                            MoneyMap
                        </span>
                    </div>
                ) : (
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            background: 'var(--primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            M
                        </div>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
                            MoneyMap
                        </span>
                    </Link>
                )}

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {user ? (
                        <>
                            <span style={{ color: '#94a3b8', marginRight: '8px' }}>
                                Hi, <span style={{ color: 'var(--text-main)' }}>{user.name}</span>
                            </span>
                            <Button variant="secondary" onClick={handleLogout} size="sm">
                                Logout
                            </Button>
                        </>
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
