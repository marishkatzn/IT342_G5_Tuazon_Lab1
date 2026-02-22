import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Layout from '../components/Layout';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await register(name, email, password);
        if (success) {
            navigate('/login');
        } else {
            alert('Registration failed');
        }
    };

    return (
        <Layout>
            <div className="flex-center" style={{ minHeight: '60vh' }}>
                <Card title="Create Account">
                    <form onSubmit={handleSubmit}>
                        <Input
                            
                            type="text"
                            placeholder="Enter Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            
                            type="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                           
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" size="lg" style={{ width: '100%', marginTop: '1rem' }}>
                            Create Account
                        </Button>
                    </form>
                    <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#94a3b8' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>
                            Sign In
                        </Link>
                    </div>
                </Card>
            </div>
        </Layout>
    );
};

export default Register;
