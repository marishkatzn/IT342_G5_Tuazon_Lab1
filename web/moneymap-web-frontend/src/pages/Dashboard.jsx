import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const StatCard = ({ title, value, change, isPositive }) => (
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px', flex: 1, minWidth: '250px' }}>
            <h3 style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>{title}</h3>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>{value}</div>
            <div style={{
                marginTop: '0.5rem',
                fontSize: '0.875rem',
                color: isPositive ? '#10b981' : '#ef4444',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}>
                {isPositive ? '↑' : '↓'} {change}
                <span style={{ color: '#64748b' }}>vs last month</span>
            </div>
        </div>
    );

    return (
        <Layout>
            <div className="animate-fade-in">
                <header style={{ marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        background: 'linear-gradient(to right, #fff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '0.5rem'
                    }}>
                        Dashboard
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
                        Welcome back, {user?.name}. Here's your financial overview.
                    </p>
                </header>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    <StatCard title="Total Balance" value="$12,450.00" change="12%" isPositive={true} />
                    <StatCard title="Monthly Income" value="$4,200.00" change="5%" isPositive={true} />
                    <StatCard title="Monthly Expenses" value="$2,150.00" change="2%" isPositive={false} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <Card className="glass-panel" style={{ padding: '2rem', height: '100%' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Recent Transactions</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[1, 2, 3].map((i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '12px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: 'rgba(99, 102, 241, 0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>🛒</div>
                                        <div>
                                            <div style={{ fontWeight: '600' }}>Grocery Store</div>
                                            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Today, 2:30 PM</div>
                                        </div>
                                    </div>
                                    <div style={{ fontWeight: '600', color: '#ef4444' }}>-$120.50</div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="glass-panel" style={{ padding: '2rem', height: '100%' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Quick Actions</h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <Button style={{ width: '100%', justifyContent: 'flex-start' }}>+ Add Expense</Button>
                            <Button variant="secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>Send Money</Button>
                            <Button variant="secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>View Reports</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
