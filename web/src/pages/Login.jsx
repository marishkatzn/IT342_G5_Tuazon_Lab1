import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Layout from '../components/Layout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            navigate('/dashboard');
        } else {
            alert('Login failed');
        }
    };

    return (
        <Layout>
            <div className="flex-center" style={{ minHeight: '60vh' }}>
                <Card title="Welcome Back">
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" size="lg" style={{ width: '100%', marginTop: '1rem' }}>
                            Sign In
                        </Button>
                    </form>
                    <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#94a3b8' }}>
                        Don't have an account?{' '}
                        <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>
                            Sign Up
                        </Link>
                    </div>
                </Card>
            </div>
        </Layout>
    );
};

export default Login;
