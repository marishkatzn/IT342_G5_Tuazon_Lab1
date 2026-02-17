import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Layout from '../components/Layout';
import SavingsGoal from '../components/SavingsGoal';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const StatCard = ({ title, value, change, isPositive }) => (
        <div className="glass-panel" style={{
            padding: '1.5rem',
            borderRadius: '24px',
            flex: 1,
            minWidth: '250px',
            border: '1px solid var(--glass-border)',
            background: 'rgba(255,255,255,0.6)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{value}</div>
            <div style={{
                fontSize: '0.875rem',
                color: isPositive ? '#10b981' : '#ef4444',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: '600',
                background: isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                padding: '4px 12px',
                borderRadius: '20px',
                width: 'fit-content'
            }}>
                {isPositive ? '↑' : '↓'} {change}
                <span style={{ color: 'var(--text-muted)', fontWeight: '400' }}>vs last month</span>
            </div>
        </div>
    );

    return (
        <Layout>
            <div className="animate-fade-in">
                <header style={{ marginBottom: '3rem', paddingTop: '1rem' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        color: 'var(--text-main)',
                        marginBottom: '0.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Dashboard
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
                        Welcome back, <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{user?.name}</span>. Here's your financial overview.
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    {/* Top Section: Stats */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <StatCard title="Total Balance" value="$12,450.00" change="12%" isPositive={true} />
                        <StatCard title="Monthly Income" value="$4,200.00" change="5%" isPositive={true} />
                        <StatCard title="Monthly Expenses" value="$2,150.00" change="2%" isPositive={false} />
                    </div>

                    {/* Main Section: Savings Goal */}
                    <div style={{ width: '100%' }}>
                        <SavingsGoal />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
