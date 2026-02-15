import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem 0', display: 'flex', flexDirection: 'column' }}>
                <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {children}
                </div>
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                color: '#64748b',
                fontSize: '0.875rem',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
                © {new Date().getFullYear()} MoneyMap. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
