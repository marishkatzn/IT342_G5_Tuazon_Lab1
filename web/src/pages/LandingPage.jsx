import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const LandingPage = () => {
    return (
        <Layout>
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem' }}>
                    {/* Left Content */}
                    <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: 'rgba(34, 197, 94, 0.1)',
                            color: '#4ade80',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(34, 197, 94, 0.2)'
                        }}>
                            New: Budget Planning 🚀
                        </div>
                        <h1 style={{
                            fontSize: '4.5rem',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            color: 'white',
                            letterSpacing: '-2px'
                        }}>
                            Reach your financial targets
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            marginBottom: '2.5rem',
                            lineHeight: '1.7',
                            maxWidth: '90%'
                        }}>
                            A savings goal tracking system that helps users set financial targets and monitor contributions toward achieving them.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/register">
                                <Button variant="primary" size="lg">
                                    Get started
                                </Button>
                            </Link>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>75K+</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Active Users</p>
                            </div>
                            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>98%</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Abstract Logo Representation */}
                    <div style={{ flex: '1 1 400px', position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Background Design Elements */}
                        <div style={{
                            position: 'absolute',
                            width: '500px',
                            height: '500px',
                            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(15, 23, 42, 0) 70%)',
                            borderRadius: '50%',
                            zIndex: 0,
                        }}></div>

                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '10%',
                            width: '100px',
                            height: '100px',
                            border: '2px solid rgba(34, 197, 94, 0.1)',
                            borderRadius: '50%',
                            zIndex: 0
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '15%',
                            width: '60px',
                            height: '60px',
                            background: 'rgba(34, 197, 94, 0.05)',
                            borderRadius: '50%',
                            zIndex: 0
                        }}></div>

                        {/* Logo Construction: Map Pin + Coin */}
                        <div style={{ position: 'relative', zIndex: 1, transform: 'scale(1.2)' }}>
                            <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="pinGradient" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#334155" />
                                        <stop offset="1" stopColor="#1e293b" />
                                    </linearGradient>
                                    <linearGradient id="coinGradient" x1="100" y1="65" x2="100" y2="115" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#22c55e" />
                                        <stop offset="1" stopColor="#16a34a" />
                                    </linearGradient>
                                    <filter id="shadow" x="0" y="0" width="200" height="200" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="10" />
                                        <feGaussianBlur stdDeviation="15" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.772549 0 0 0 0 0.368627 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                    </filter>
                                </defs>

                                {/* Map Pin Shape */}
                                <path d="M100 180C100 180 160 110 160 80C160 46.8629 133.137 20 100 20C66.8629 20 40 46.8629 40 80C40 110 100 180 100 180Z" fill="url(#pinGradient)" />
                                <path d="M100 170C100 170 150 108 150 80C150 52.3858 127.614 30 100 30C72.3858 30 50 52.3858 50 80C50 108 100 170 100 170Z" fill="#1e293b" />

                                {/* Inner Circle / Coin */}
                                <circle cx="100" cy="80" r="35" fill="white" filter="url(#shadow)" />
                                <circle cx="100" cy="80" r="28" fill="url(#coinGradient)" />

                                {/* Dollar Sign */}
                                <path d="M100 65V95M92 70H100C104.418 70 108 73.5817 108 78C108 82.4183 104.418 86 100 86H98C93.5817 86 90 89.5817 90 94C90 98.4183 93.5817 102 98 102H108" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'white', marginBottom: '1rem' }}>Our awesome features</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
                        Connect your accounts and let us handle the heavy lifting. We categorize your spending so you always know where your money goes.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <FeatureCard
                            title="Automated Tracking"
                            description="Transactions are automatically categorized so you can see your spending habits at a glance."
                            icon="📊"
                        />
                        <FeatureCard
                            title="Smart Budgets"
                            description="Set budgets for specific categories and get notified when you're close to your limits."
                            icon="🎯"
                        />
                        <FeatureCard
                            title="Savings Goals"
                            description="Create savings goals for vacations, new gadgets, or emergency funds and track progress."
                            icon="💰"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const FeatureCard = ({ title, description, icon }) => (
    <div className="glass-panel" style={{
        padding: '2.5rem',
        borderRadius: '24px',
        textAlign: 'left',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        // background: 'var(--bg-card)', // Handled by glass-panel
        border: '1px solid var(--glass-border)'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            e.currentTarget.style.borderColor = 'var(--primary)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
        }}
    >
        <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            marginBottom: '1.5rem',
            color: '#4ade80'
        }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{description}</p>
    </div>
);

export default LandingPage;
